import {createAction, createReducer} from "@reduxjs/toolkit";

export const changeModeAC = createAction<{themeMode: ThemeMode}>('app/ChangeMode')

const initialState = {
    themeMode: "dark" as ThemeMode
}

export const appReducer = createReducer(initialState, builder => {
    builder
        .addCase(changeModeAC, (state, action) => {
            state.themeMode = action.payload.themeMode
        })
})


export type ThemeMode = 'dark' | 'light'