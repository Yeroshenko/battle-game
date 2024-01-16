import {FC, PropsWithChildren, useMemo} from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import {ThemeOptions, ThemeProvider as MuiThemeProvider} from '@mui/material/styles'
import {enUS} from '@mui/material/locale'
import {createTheme} from '@mui/material'
import '@fontsource-variable/nunito';

import {palette} from './palette.ts'
import {shadows} from './shadows.ts'
import {customShadows} from "./custom-shadows.ts"
import {typography} from "./typography.ts"

export const ThemeProvider: FC<PropsWithChildren> = ({children}) => {
    const themeOptions = useMemo(
        () => ({
            palette,
            shadows,
            customShadows: customShadows,
            typography,
            shape: {borderRadius: 8},
        }),
        [],
    )

    const theme = createTheme(themeOptions as ThemeOptions)
    const themeWithLocale = useMemo(() => createTheme(theme, enUS), [theme])

    return (
        <MuiThemeProvider theme={themeWithLocale}>
            <CssBaseline/>
            {children}
        </MuiThemeProvider>
    )
}
