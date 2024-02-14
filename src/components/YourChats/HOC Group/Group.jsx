import './Group.css';
import {Link} from "react-router-dom";

export default function Group({props}) {
    const list = [...props];
    return list.map( (item, id) =>
            <li className={'list-chats__item'} key={id}>
                <Link to={`/chat/${item.id_chats}`}>
                    {item.nameChat ? item.nameChat : item.users[0]}
                    <div className={'list-chats__count-mess'}>{item.body_chats.length}</div>
                </Link>
            </li>
    );
}