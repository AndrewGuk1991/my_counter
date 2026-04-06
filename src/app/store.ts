import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {settingsReducer} from "../model/settingsReducer.ts";

const rootReducer = combineReducers({
    settings: settingsReducer,
})

export const store = configureStore({
    reducer: rootReducer,
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
