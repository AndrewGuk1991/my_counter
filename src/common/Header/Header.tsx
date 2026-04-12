import {AppBar, Container, Switch, Toolbar} from "@mui/material";
import {useAppSelector} from "@/common/hooks/useAppSelector.ts";
import {selectThemeMode} from "@/app/app-selectors.ts";
import {useAppDispatch} from "@/common/hooks/useAppDispatch.ts";
import {changeModeAC} from "@/app/appReducer.ts";

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

