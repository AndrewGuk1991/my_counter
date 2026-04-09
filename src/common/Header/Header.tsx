import {AppBar, Container, Switch, Toolbar} from "@mui/material";
import {changeModeAC} from "../../app/appReducer.ts";
import {useAppSelector} from "../hooks/useAppSelector.ts";
import {selectThemeMode} from "../../app/app-selectors.ts";
import {useAppDispatch} from "../hooks/useAppDispatch.ts";

export const Header = () => {

    const themeMode = useAppSelector(selectThemeMode)

    const dispatch = useAppDispatch();

    return (
        <AppBar position="static">
            <Container>
                <Toolbar sx={{ display: 'flex', justifyContent: 'flex-end'}}>
                    <Switch
                        checked={themeMode === 'dark'}
                        onChange={() => {
                            dispatch(changeModeAC({themeMode: themeMode === 'dark' ? 'light' : 'dark'}))
                        }}
                    />
                </Toolbar>
            </Container>
        </AppBar>
    );
};

