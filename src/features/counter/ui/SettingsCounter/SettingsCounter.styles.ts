import type {SxProps, Theme} from '@mui/material';

export const settingsWrapperStyles: SxProps<Theme> = {
    border: '2px solid',
    borderColor: 'primary.main',
    borderRadius: '5px',
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
    border: '1px solid',
    borderRadius: '5px',
    borderColor: theme.palette.primary.main,
    marginLeft: '20px',
})
