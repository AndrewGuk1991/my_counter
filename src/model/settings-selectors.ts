import type {RootState} from "../app/store.ts";
import type {Settings} from "./settingsReducer.ts";


export const selectSettings = (state: RootState): Settings => state.settings