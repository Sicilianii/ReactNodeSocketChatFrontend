import React, {FC} from 'react';

interface IFullProfileName {
    fontSizeName?: string,
    fontWeightName?: string,
    colorName?: string,
    widthName?: string,
    children?: React.ReactNode
}

const FullProfileName: FC<IFullProfileName> = (
    {
        fontSizeName  = '24px',
        fontWeightName = '500',
        colorName = 'rgb(255, 255, 255)',
        widthName = 'fit-content',
        children
    }) => {
    return (
        <span style={{
            fontSize: fontSizeName,
            fontWeight: fontWeightName,
            color: colorName,
            margin: 0,
            textAlign: 'left',
            width: widthName
        }}>{children}</span>
    );
}

export default FullProfileName;