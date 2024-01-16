import {FC} from 'react'

import {Game} from '@/widgets/game'
import * as S from './styles.ts'

export const Home: FC = () => (
    <S.PageInner>
        <S.GameWrapper>
            <Game/>
        </S.GameWrapper>
    </S.PageInner>
)
