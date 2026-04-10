import {Box, Button, Fade, TextField, Typography} from "@mui/material";
import {fieldStyles, settingsWrapperStyles} from "./SettingsCounter.styles.ts";
import {useState} from "react";
import {useAppSelector} from "@/common/hooks/useAppSelector.ts";
import {selectSettings} from "@/features/counter/model/settings-selectors.ts";
import {useAppDispatch} from "@/common/hooks/useAppDispatch.ts";
import {boxStyles} from "@/common/styles/box.styles.ts";
import {buttonStyles, buttonsWrapperStyles} from "@/common/styles/buttons.styles.ts";
import {updateSettingsAC} from "@/features/counter/model/settingsReducer.ts";


export const SettingsCounter = () => {
    const settings = useAppSelector(selectSettings)
    const [maxValue, setMaxValue] = useState(settings.maxValue);
    const [startValue, setStartValue] = useState(settings.startValue)

    const dispatch = useAppDispatch();

    const validSettings = maxValue > startValue

    return (
        <Box sx={boxStyles}>
            <Box sx={settingsWrapperStyles}>
                <div className={'textFieldWrapper'}>
                    max value:
                    <TextField
                        value={maxValue}
                        onChange={(e) => {
                            setMaxValue(Number(e.currentTarget.value))
                        }}
                        type='number'
                        size={'small'}
                        sx={fieldStyles(!validSettings)}
                        error={!validSettings}
                    />
                </div>
                <div className={'textFieldWrapper'}>
                    start value:
                    <TextField
                        value={startValue}
                        onChange={(e) => {
                            setStartValue(Number(e.currentTarget.value))
                        }}
                        size={'small'}
                        type='number'
                        sx={fieldStyles(!validSettings)}
                        error={!validSettings}
                    />
                </div>
                {!validSettings && (
                    <Fade in={!validSettings} timeout={500}>
                        <Typography className="errorMessage" color="error">
                            enter valid settings
                        </Typography>
                    </Fade>
                )}
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

