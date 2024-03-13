
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {getUsers} from "../../shared/lib/helpers/GetUser";


export default function Group__entities({props, type}) {

    const list = [...props];
    const users = useSelector(state => state.profile.users);

    return list.map( (item, id) =>
            <li className={'list-chats__item'} key={id}>
                <Link to={`/chats/${type ? 'recent' : 'group'}/${item.id_chats}`} className={'list-chats__item-link'}>
                    <span className={'list-chats__item-name'}>
                        {item.nameChat ? item.nameChat : getUsers(users, item.users[0])}
                    </span>
                    <div className={'list-chats__item-count'}>{item.body_chats.length}</div>
                </Link>
            </li>
    );
}