import {CssBaseline, ThemeProvider} from "@mui/material"
import "./App.css"
import {useAppSelector} from "@/common/hooks/useAppSelector.ts";
import {selectThemeMode} from "@/app/app-selectors.ts";
import {getTheme} from "@/common/theme/theme.ts";
import {Header} from "@/common/Header/Header.tsx";
import {Main} from "@/app/Main.tsx";

export const App = () => {

    const themeMode = useAppSelector(selectThemeMode)

    const theme = getTheme(themeMode);

    return (
        <ThemeProvider theme={theme}>
            <div className={'app'}>
                <Header/>
                <CssBaseline/>
                <Main/>
            </div>
        </ThemeProvider>
    )
}

