import {ThemeProvider} from '@/shared/lib/theme'
import {Home} from '@/pages/home'

export const App = () => (
    <ThemeProvider>
        <Home/>
    </ThemeProvider>
)

