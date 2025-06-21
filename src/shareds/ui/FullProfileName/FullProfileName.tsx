import type { PropsWithChildren, FC } from 'react';

interface IFullProfileNameProps {
    fontSizeName?: string,
    fontWeightName?: string,
    colorName?: string,
    widthName?: string
}

export const FullProfileName: FC<PropsWithChildren<IFullProfileNameProps>> = (
    {
        fontSizeName,
        fontWeightName,
        colorName,
        widthName,
        children
    }) => {
    return (
        <span style={{
            fontSize: fontSizeName ?? '24px',
            fontWeight: fontWeightName ?? '500',
            color: colorName ?? 'rgb(255, 255, 255)',
            margin: 0,
            textAlign: 'left',
            width: widthName ?? 'fit-content'
        }}>{children}</span>
    );
}
