import {Box, Button, TextField} from "@mui/material";
import {fieldStyles, settingsWrapperStyles} from "./SettingsCounter.styles.ts";
import {useState} from "react";
import {updateSettingsAC} from "../../model/settingsReducer.ts";
import {useAppSelector} from "../../../../common/hooks/useAppSelector.ts";
import {useAppDispatch} from "../../../../common/hooks/useAppDispatch.ts";
import {selectSettings} from "../../model/settings-selectors.ts";
import {boxStyles} from "../../../../common/styles/box.styles.ts";
import {buttonStyles, buttonsWrapperStyles} from "../../../../common/styles/buttons.styles.ts";


export const SettingsCounter = () => {
    const settings = useAppSelector(selectSettings)
    const [maxValue, setMaxValue] = useState(settings.maxValue);
    const [startValue, setStartValue] = useState(settings.startValue)

    const dispatch = useAppDispatch();

    const validSettings = maxValue > startValue

    return (
        <Box sx={boxStyles}>
            <Box sx={settingsWrapperStyles}>
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
            <Box sx={buttonsWrapperStyles}>
                <Button
                    variant="contained"
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

