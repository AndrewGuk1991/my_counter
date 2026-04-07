import type {SxProps, Theme} from '@mui/material';

const borderStyles: SxProps<Theme> = {
    border: '2px solid',
    borderColor: 'primary.main',
    borderRadius: '5px',
}

export const boxStyles: SxProps<Theme> = (theme) =>( {
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

export const settingsWrapperStyles: SxProps<Theme> = {
    ...borderStyles,
    height: '100%',
    flexDirection: 'column',
    gap: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}

export const buttonsWrapperStyles: SxProps<Theme> = {
    ...borderStyles,
    height: '100px',
    gap: '50px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}

export const countWrapperStyles: SxProps<Theme> = {
    ...borderStyles,
    height: '100%',
    fontSize: '64px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}

export const buttonStyles: SxProps<Theme> = {
    height: '30px',
    backgroundColor: 'aqua',
    padding: '10px 10px 5px 10px',
    textTransform: 'none',
    fontSize: '24px',
    '&:hover': {
        backgroundColor: '#00ffff',
        opacity: 0.8
    }
}

export const fieldStyles: SxProps<Theme> = {
    width: '50%',
    backgroundColor: 'white',
    border: '1px solid aqua',
    borderRadius: '5px',
    marginLeft: '20px',
}

export const containerSx: SxProps<Theme> = {
    display: 'flex',
    gap: '50px',
    height: '100vh',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
}