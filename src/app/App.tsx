import {CssBaseline, ThemeProvider} from "@mui/material"
import {useAppSelector} from "../common/hooks/useAppSelector.ts";
import {selectThemeMode} from "./app-selectors.ts";
import {Header} from "../common/Header/Header.tsx";
import "./App.css"
import {Main} from "./Main.tsx";
import {getTheme} from "../common/theme/theme.ts";


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

