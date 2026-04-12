import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {settingsReducer} from "@/features/counter/model/settingsReducer.ts";
import {appReducer} from "@/app/appReducer.ts";


const rootReducer = combineReducers({
    settings: settingsReducer,
    app: appReducer,
})

export const store = configureStore({
    reducer: rootReducer,
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
