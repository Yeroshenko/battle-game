import {CSSProperties} from 'react'
import {Card, styled} from '@mui/material'

export const Wrapper = styled(Card)(
    ({theme}) => `
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: ${theme.spacing(8)};
        border-radius: ${theme.shape.borderRadius * 4}px;
    `
)

export const GameArea = styled('div')`
    display: flex;
    position: relative;
    width: 100%;
    aspect-ratio: 1/1
`

export const GameInfoContainer = styled('div')`
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    align-items: center;
    justify-content: center;
`

export const lottieStyles: CSSProperties = {
    display: 'flex',
    width: '100%',
    height: '100%',
}
