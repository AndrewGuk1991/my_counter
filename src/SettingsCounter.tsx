import {Box, Button, TextField} from "@mui/material";
import {boxStyles, buttonStyles, fieldStyles, getCounterStyles} from "./сounter.styles.ts";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {updateSettingsAC} from "./settingsReducer";
import type {RootState} from "./app/store.ts";


export const SettingsCounter = () => {
    const settings = useSelector((state: RootState) => state.settings)
    const [maxValue, setMaxValue] = useState(settings.maxValue);
    const [startValue, setStartValue] = useState(settings.startValue)

    const dispatch = useDispatch()

    const validSettings = maxValue > startValue

    return (
        <Box sx={boxStyles}>
            <Box sx={getCounterStyles({height: '100%', flexDirection: 'column', gap: '10px'})}>
                <div>
                    max value:
                    <TextField
                        value={maxValue}
                        onChange={(e) => {
                            setMaxValue(Number(e.currentTarget.value))
                        }}
                        type='number'
                        size={'small'}
                        sx={fieldStyles}/>
                </div>
                <div>
                    start value:
                    <TextField
                        value={startValue}
                        onChange={(e) => {
                            setStartValue(Number(e.currentTarget.value))
                        }}
                        size={'small'}
                        type='number'
                        sx={fieldStyles}/>
                </div>
                {!validSettings && <div style={{color: 'red'}}>enter valid settings</div>}
            </Box>
            <Box sx={getCounterStyles({height: '100px'})}>
                <Button
                    onClick={() => {
                        dispatch(updateSettingsAC({maxValue, startValue}))
                    }}
                    sx={buttonStyles}
                    disabled={(maxValue === settings.maxValue && startValue === settings.startValue) || !validSettings}
                >
                    set
                </Button>
            </Box>
        </Box>
    );
};

