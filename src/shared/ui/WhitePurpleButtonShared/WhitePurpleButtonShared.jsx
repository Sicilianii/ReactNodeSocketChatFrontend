export default function WhitePurpleButtonShared(
    {
        children,
        backgroundBtn = 'rgb(143, 13, 239)',
        colorText = 'white',
        widthBtn = 'fit-content',
        heightBtn = 'fit-content',
        paddingGtn = '4px 12px',
        fontSIzeBnt = '12px',
    }
) {
    return (
        <button style={{
            background: backgroundBtn,
            color: colorText,
            width: widthBtn,
            height: heightBtn,
            padding: paddingGtn,
            fontSize: fontSIzeBnt,
            border: "none",
            outline: 'none',
            borderRadius: '30px',
            cursor: 'pointer',
            boxSizing: 'border-box'
        }} type={"submit"}>{children}</button>
    );
}