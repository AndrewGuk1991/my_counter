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
    padding: '0 20px',
    position: 'relative',

    '& .textFieldWrapper': {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    '& .errorMessage': {
        position: 'absolute',
        bottom: '8px',
        left: '50%',
        transform: 'translateX(-50%)',
        fontSize: '22px',
        fontWeight: 'bold',
        whiteSpace: 'nowrap'
    }
}


export const fieldStyles = (error: boolean): SxProps<Theme> => () => ({
    width: '50%',
    backgroundColor: error ? '#bd2828' : 'background.paper',
    ...borderStyles,
    borderColor: error ? '#bd2828' : 'primary.main',
    marginLeft: '20px',
    '& .MuiOutlinedInput-notchedOutline': {
        border: 'none',
    },
})
