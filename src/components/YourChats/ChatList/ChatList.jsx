import './ChatList.css';

export default function ChatList() {
    return(
        <ul className={'list-group'}>
            <li className={'list-group__item'}>
                <button className={'list-group__btn'}>
                    <span className={'list-group__item-name'}>Group Chat</span>
                    <span className={'list-group__item-arrow'}>v</span>
                </button>
                <ul className={'list-chats'}>
                    <li className={'list-chats__item'}>
                        <a href={'/chat/:id'}>
                            Mike
                            <div className={'list-chats__count-mess'}>2</div>
                        </a>
                    </li>
                    <li className={'list-chats__item'}>Luice
                        <div className={'list-chats__count-mess'}>2</div>
                    </li>
                    <li className={'list-chats__item'}>German
                        <div className={'list-chats__count-mess'}>10</div>
                    </li>
                </ul>
            </li>
        </ul>
    );
}