import type {SxProps, Theme} from "@mui/material";

export const buttonsWrapperStyles: SxProps<Theme> = {
    border: '2px solid',
    borderColor: 'primary.main',
    borderRadius: '5px',
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