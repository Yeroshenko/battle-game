import {useRef, useState} from 'react'
import Lottie, {LottieRefCurrentProps} from 'lottie-react'
import {Button, Typography} from '@mui/material'

import battleAnimation from './battle-animation.json'
import * as S from './styles.ts'
import {GameResult, GameState, useGameProgress} from '../model.ts'
import {GameResultText} from "./GameResultText.tsx"

const GAME_INTERVAL = 10_000; // 10 sec.

const buttonLabels: Record<GameState, string> = {
    initial: 'Start Battle',
    inProgress: 'Battle is in full swing...',
    result: 'Start new battle'
}

export const Game = () => {
    const lottieRef = useRef<LottieRefCurrentProps>(null);
    const [gameResult, setGameResult] = useState<GameResult | null>(null);

    const {gameState, start} = useGameProgress({
        timeout: GAME_INTERVAL,
        onStart: () => {
            setGameResult(null)
            lottieRef.current?.play()
        },
        onEnd: (result) => {
            setGameResult(result)
            lottieRef.current?.stop()
        }
    })


    return (
        <S.Wrapper>
            <Typography variant='h1' marginBottom={8}>Battle ⚔️</Typography>
            <S.GameArea>
                <Lottie
                    animationData={battleAnimation}
                    loop={true}
                    lottieRef={lottieRef}
                    autoplay={false}
                    style={S.lottieStyles}
                />

                { gameState === 'initial' && (
                    <S.GameInfoContainer>
                        <Typography variant='h2' align='center'>Press "Start Battle" button to start </Typography>
                    </S.GameInfoContainer>
                )}
                {gameResult && gameState === 'result' && (
                    <S.GameInfoContainer>
                        <GameResultText result={gameResult}/>
                    </S.GameInfoContainer>
                )}
            </S.GameArea>
            <Button variant='contained' size='large' disabled={gameState === 'inProgress'} onClick={start}>
                {buttonLabels[gameState]}
            </Button>
        </S.Wrapper>
    )
}
