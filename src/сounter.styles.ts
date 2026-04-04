import type { SxProps, Theme } from '@mui/material';

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

interface CounterStyleConfig {
    height: string;
    fontSize?: string;
    flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
    gap?: string;
}

export const getCounterStyles = ({
                                     fontSize,
                                     height,
                                     flexDirection = 'row',
                                     gap = '0px'
                                 }: CounterStyleConfig): SxProps<Theme> => {

    // Создаем базовый объект
    const styles: SxProps<Theme> = {
        height,
        border: '2px solid aqua',
        borderRadius: '5px',
        display: 'flex',
        flexDirection,
        justifyContent: 'center',
        alignItems: 'center',
        gap,
        fontWeight: 'bold',
        color: 'aqua',
    };

    // Добавляем fontSize только если он передан, чтобы избежать undefined
    if (fontSize) {
        (styles as any).fontSize = fontSize;
    }

    return styles;
};


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