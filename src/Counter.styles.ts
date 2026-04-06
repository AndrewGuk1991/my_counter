import type {SxProps, Theme} from '@mui/material';

export const boxStyles: SxProps = {
    border: '2px solid aqua',
    borderRadius: '5px',
    width: '350px',
    height: '250px',
    display: 'flex',
    flexDirection: 'column',
    padding: '10px',
    gap: '10px',
}

export const settingsWrapperStyles: SxProps<Theme> = {
    height: '100%',
    flexDirection: 'column',
    gap: '10px',
    borderRadius: '5px',
    display: 'flex',
    border: '2px solid aqua',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    color: 'aqua',
}

export const buttonsWrapperStyles: SxProps<Theme> = {
    height: '100px',
    gap: '50px',
    border: '2px solid aqua',
    borderRadius: '5px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    color: 'aqua'
}

export const countWrapperStyles: SxProps<Theme> = {height: '100%',
    fontSize: '64px',
    border: '2px solid aqua',
    borderRadius: '5px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    color: 'aqua'}

export const buttonStyles: SxProps = {
    height: '30px',
    backgroundColor: 'aqua',
    padding: '10px 10px 5px 10px',
    textTransform: 'none',
    fontWeight: 'bold',
    fontSize: '24px'
}

export const fieldStyles: SxProps = {
    width: '50%',
    backgroundColor: 'white',
    border: '1px solid aqua',
    borderRadius: '5px',
    marginLeft: '20px',
}

export const containerSx: SxProps = {
    display: 'flex',
    gap: '50px',
    height: '100vh',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
}