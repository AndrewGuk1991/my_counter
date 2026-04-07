import type {RootState} from "./store.ts";
import type {ThemeMode} from "./appReducer.ts";


export const selectThemeMode = (state: RootState): ThemeMode => state.app.themeMode