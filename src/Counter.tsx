import {Box, Button} from "@mui/material";
import {boxStyles, buttonStyles, getCounterStyles} from "./сounter.styles.ts";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import type {RootState} from "./app/store.ts";

export const Counter = () => {
    const settings = useSelector((state: RootState) => state.settings);
    const [count, setCount] = useState(settings.startValue)

    useEffect(() => {
        setCount(settings.startValue);
    }, [settings]);

    return (
        <Box sx={boxStyles}>
            <Box sx={getCounterStyles({height: '100%', fontSize: '64px'})}>
                <span
                    style={{color: count >= settings.maxValue ? "red" : ""}}
                >{count}</span>
            </Box>
            <Box sx={getCounterStyles({height: '100px', gap: '50px'})}>
                <Button sx={buttonStyles}
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
                >
                    reset
                </Button>
            </Box>
        </Box>
    );
};

