import type {RootState} from "@/app/store.ts";
import type {ThemeMode} from "@/app/appReducer.ts";


export const selectThemeMode = (state: RootState): ThemeMode => state.app.themeMode