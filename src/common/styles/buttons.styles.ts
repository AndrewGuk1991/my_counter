import type {SxProps, Theme} from "@mui/material";
import {borderStyles} from "./border.styles.ts";

export const buttonsWrapperStyles: SxProps<Theme> = {
    ...borderStyles,
    height: '100px',
    gap: '50px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}

export const buttonStyles: SxProps<Theme> = (theme) =>( {
    height: '30px',
    backgroundColor: theme.palette.primary.main,
    padding: '10px 10px 5px 10px',
    textTransform: 'none',
    fontSize: '24px',
})