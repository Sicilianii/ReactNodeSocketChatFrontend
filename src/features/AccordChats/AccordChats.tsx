import React, {FC, ReactNode, useId, useState} from 'react';
import './_AccordChats.scss';

interface IAccordChats {
    children: ReactNode,
    heading: string
}

const AccordChats: FC<IAccordChats> = ({children, heading}) => {

    const [drop, setDrop] = useState<boolean>(false);
    const id = useId();
    const dropedMenu = () => setDrop(!drop);


    return(
        <li className={'chat-list__item'} key={id}>
            <button className={'chat-list__item-btn'} onClick={ dropedMenu }>
                <span className={'chat-list__item-btn-name'}>{ heading }</span>
                <svg className={"chat-list__item-btn-svg"} width="12" height="12" fill="#fff" viewBox="0 0 448 512" style={{ rotate: drop ? '180deg' : '0deg', transition: "all 400ms"}}>
                    <path
                        d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                </svg>
            </button>
            <ul className={'list-chats'} style={{display: drop ? "block" : 'none'}}>{ children }</ul>
        </li>
    );
}

export default AccordChats;