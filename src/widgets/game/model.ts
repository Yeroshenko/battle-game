import {useRef, useState} from 'react'

export type GameState = 'initial' | 'inProgress' | 'result'
export type GameResult = 'win' | 'lose'

type ModelParams = {
    timeout: number;
    onStart: () => void
    onEnd: (result: GameResult) => void
}

const getRandomBoolean = () => Math.random() < 0.5

export const useGameProgress = ({ timeout, onStart, onEnd }: ModelParams) => {
    const [gameState, setGameState] = useState<GameState>('initial');
    const progressTimeoutId = useRef<number>();


    const start = () => {
        onStart()
        setGameState('inProgress');

        progressTimeoutId.current = window.setTimeout(() => {
            onEnd(getRandomBoolean() ? 'win' : 'lose')
            setGameState('result')
        }, timeout)

    }

    return { gameState, start }
}
