import {Container, createTheme, CssBaseline, ThemeProvider} from "@mui/material"
import './App.css'
import {SettingsCounter} from "../SettingsCounter.tsx";
import {Count} from "../Count.tsx";
import {containerSx} from "../Counter.styles.ts";
import {useAppSelector} from "../common/hooks/useAppSelector.ts";
import {selectThemeMode} from "./app-selectors.ts";


function App() {

    const themeMode = useAppSelector(selectThemeMode);

    const theme = createTheme({
        palette: {
            mode: themeMode,
            primary: {
                main: '#087EA4',
            }
        }
    })

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Container sx={containerSx}>
                <SettingsCounter/>
                <Count/>
            </Container>
        </ThemeProvider>
    )
}

export default App
