import type {SxProps, Theme} from "@mui/material";
import {borderStyles} from "@/common/styles/border.styles.ts";

export const boxStyles: SxProps<Theme> = (theme) => ({
    ...borderStyles,
    width: '360px',
    height: '320px',
    display: 'flex',
    flexDirection: 'column',
    padding: '10px',
    gap: '10px',
    color: theme.palette.primary.main,
    fontWeight: 'bold',
    fontSize: '20px'
})

