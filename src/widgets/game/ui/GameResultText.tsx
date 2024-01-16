import {FC, useMemo} from 'react'
import {Typography, useTheme} from '@mui/material'

import {GameResult} from '../model.ts'

type GameResultTextProps = {
    result: GameResult
}

const resultLabels: Record<GameResult, string> = {
    win: 'You are won! 🎉',
    lose: 'You lose! 😢'
}

export const GameResultText: FC<GameResultTextProps> = ({result}) => {
    const theme = useTheme()

    const colorsMap: Record<GameResult, string> = useMemo(() => ({
        win: theme.palette.success.light,
        lose: theme.palette.error.main
    }), [theme])

    return (
        <Typography variant='h2' align='center' color={colorsMap[result]}>
            {resultLabels[result]}
        </Typography>
    )
}
