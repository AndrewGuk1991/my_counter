import {Box, Button} from "@mui/material";
import {useEffect, useState} from "react";
import {useAppSelector} from "../../../../common/hooks/useAppSelector.ts";
import {selectSettings} from "../../model/settings-selectors.ts";
import {boxStyles} from "../../../../common/styles/box.styles.ts";
import {buttonStyles, buttonsWrapperStyles} from "../../../../common/styles/buttons.styles.ts";
import {countWrapperStyles} from "./Count.styles.ts";

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

