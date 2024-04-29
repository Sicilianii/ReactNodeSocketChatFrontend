import {FC, ReactNode} from "react";

export enum TypeBtn {
    SUBMIT = 'submit',
    RESET = 'reset',
    BUTTON = 'button'
}

interface IWhitePurpleButton {
    className?: string
    children?: ReactNode,
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

const WhitePurpleButton: FC<IWhitePurpleButton> = (
    {
        children,
        backgroundBtn = 'rgb(143, 13, 239)',
        colorText = 'white',
        widthBtn = 'fit-content',
        heightBtn = 'fit-content',
        paddingGtn = '4px 12px',
        fontSIzeBnt = '12px',
        fontWeightBnt = '400',
        type = TypeBtn.SUBMIT,
        disable = false,
        border = 'none'
    }
) => {
    return (
        <button style={{
            background: backgroundBtn,
            color: colorText,
            width: widthBtn,
            height: heightBtn,
            padding: paddingGtn,
            fontSize: fontSIzeBnt,
            fontWeight: fontWeightBnt,
            outline: 'none',
            borderRadius: '30px',
            cursor: 'pointer',
            boxSizing: 'border-box',
            border: border,
        }} type={type} disabled={disable}>{children}</button>
    );
}
export default WhitePurpleButton;