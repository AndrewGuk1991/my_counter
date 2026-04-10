import type {SxProps, Theme} from "@mui/material";
import {borderStyles} from "../../../../common/styles/border.styles.ts";

export const countWrapperStyles: SxProps<Theme> = {
    ...borderStyles,
    height: '100%',
    fontSize: '64px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}