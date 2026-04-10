import type {SxProps, Theme} from "@mui/material";
import {borderStyles} from "./border.styles.ts";

export const boxStyles: SxProps<Theme> = (theme) => ({
    ...borderStyles,
    width: '350px',
    height: '250px',
    display: 'flex',
    flexDirection: 'column',
    padding: '10px',
    gap: '10px',
    color: theme.palette.primary.main,
    fontWeight: 'bold',
})

