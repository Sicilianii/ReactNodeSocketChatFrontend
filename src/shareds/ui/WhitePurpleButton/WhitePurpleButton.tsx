import type {FC, PropsWithChildren} from "react";

enum TypeBtn {
    SUBMIT = 'submit',
    RESET = 'reset',
    BUTTON = 'button'
}

interface IWhitePurpleButton {
    className?: string
    backgroundBtn?: string,
    colorText?: string,
    widthBtn?: string,
    heightBtn?: string,
    paddingGtn?: string,
    fontSIzeBnt?: string,
    fontWeightBnt?: string,
    type?: TypeBtn,
    disable?: boolean,
    border?: string
}

export const WhitePurpleButton: FC<PropsWithChildren<IWhitePurpleButton>> = (
    {
        children,
        backgroundBtn,
        colorText,
        widthBtn,
        heightBtn,
        paddingGtn,
        fontSIzeBnt,
        fontWeightBnt,
        type,
        disable,
        border
    }
) => {
    return (
        <button style={{
            background: backgroundBtn ?? 'rgb(143, 13, 239)',
            color: colorText ?? 'white',
            width: widthBtn ?? 'fit-content',
            height: heightBtn ?? 'fit-content',
            padding: paddingGtn ?? '4px 12px',
            fontSize: fontSIzeBnt ?? '12px',
            fontWeight: fontWeightBnt ?? '400',
            outline: 'none',
            borderRadius: '30px',
            cursor: 'pointer',
            boxSizing: 'border-box',
            border: border ?? 'none',
        }} type={type ?? TypeBtn.SUBMIT} disabled={disable}>{children}</button>
    );
}
