import React, {memo, ReactNode, useState} from 'react';
import './_ModalWindow.scss';

interface IModalWindow {
    children: ReactNode,
    statusWind: boolean
}

const MemoModalWindow = memo(function ModalWindow({children, statusWind}: IModalWindow) {
    const [close, setClose] = useState<boolean>(statusWind)

    return close ? (
        <div className={'modal-shadow-wrap'}>
            <div className={'modal'}>
                <button className={'modal__close'} onClick={() => setClose( state => !state)}>
                    <svg className={'modal__close-svg'} viewBox="0 0 16 16"
                         width="16" height="16" fill="none">
                        <svg viewBox="0 0 352 512" width="16" height="16" fill="#fff"
                             x="0" y="0" opacity="100%">
                            <path
                                d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path>
                        </svg>
                    </svg>
                </button>
                <div className={'modal-wrapper'}>{children}</div>
            </div>
        </div>
    ) : null
});


export default MemoModalWindow;