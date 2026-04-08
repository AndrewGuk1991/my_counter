import {Box, Button} from "@mui/material";
import {boxStyles, buttonStyles, buttonsWrapperStyles, countWrapperStyles} from "./Counter.styles.ts";
import {useEffect, useState} from "react";
import {useAppSelector} from "./common/hooks/useAppSelector.ts";
import {selectSettings} from "./model/settings-selectors.ts";

export const Count = () => {
    const settings = useAppSelector(selectSettings)
    const [count, setCount] = useState(settings.startValue)

    useEffect(() => {
        setCount(settings.startValue);
    }, [settings]);

    return (
        <Box sx={boxStyles}>
            <Box sx={countWrapperStyles}>
                <span
                    style={{color: count >= settings.maxValue ? "red" : ""}}
                >{count}</span>
            </Box>
            <Box sx={buttonsWrapperStyles}>
                <Button sx={buttonStyles}
                        variant="contained"
                        onClick={() => setCount(count + 1)}
                        disabled={count >= settings.maxValue}
                >
                    inc
                </Button>
                <Button
                    sx={buttonStyles}
                    onClick={() => {
                        setCount(settings.startValue)
                    }}
                    disabled={count === settings.startValue}
                    variant="contained"
                >
                    reset
                </Button>
            </Box>
        </Box>
    );
};

