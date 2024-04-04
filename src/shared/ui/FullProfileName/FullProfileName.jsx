import React from 'react';

function FullProfileName({
    children,
    fontSizeName  = '24px',
    fontWeightName = '500',
    colorName = 'rgb(255, 255, 255)',
    widthName = 'fit-content'
}) {
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