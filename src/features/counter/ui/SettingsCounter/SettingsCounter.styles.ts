import type {SxProps, Theme} from '@mui/material';
import {borderStyles} from "@/common/styles/border.styles.ts";


export const settingsWrapperStyles: SxProps<Theme> = {
    ...borderStyles,
    height: '100%',
    flexDirection: 'column',
    gap: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0 20px'
}


export const fieldStyles: SxProps<Theme> = (theme) =>( {
    width: '50%',
    backgroundColor: theme.palette.background.paper,
    ...borderStyles,
    marginLeft: '20px',
})
