import {createAction, createReducer} from "@reduxjs/toolkit";

export const updateSettingsAC = createAction<{startValue: number, maxValue: number}>('settings/updateSettings');

const initialState: Settings = {
    startValue: 0,
    maxValue: 2
}

export const settingsReducer = createReducer(initialState, builder => {
    builder
        .addCase(updateSettingsAC, (state, action) => {
            state.startValue = action.payload.startValue
            state.maxValue = action.payload.maxValue
        })
})

export type Settings = {
    startValue: number
    maxValue: number
}