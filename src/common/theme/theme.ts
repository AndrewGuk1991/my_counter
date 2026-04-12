import {createTheme} from "@mui/material";
import type {ThemeMode} from "@/app/appReducer.ts";

export const getTheme = (themeMode: ThemeMode) => {
    return createTheme({
        palette: {
            mode: themeMode,
            primary: {
                main: '#087EA4',
            }
        }
    })
}