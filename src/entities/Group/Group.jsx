import {NavLink } from "react-router-dom";
import {useSelector} from "react-redux";
import {getUser} from "../../shared/lib/helpers/GetUser";


export default function Group__entities({chat, type}) {

    const profile = useSelector( state => state.profile.entities);
    const selectUsers = state => state.user;
    const users = useSelector(selectUsers);

    return chat.entities.map( (item, id) =>
            <li className={'list-chats__item'} key={id}>
                {type ?
                <NavLink  to={`/home/chats/recent/${item._id}`}
                  className={({ isActive, isPending }) =>
                      isPending ? "list-chats__item-link-pending" : isActive ? "list-chats__item-link-active" : "list-chats__item-link"
                  }
                >
                    <span className={'list-chats__item-name'}>
                        { getUser(profile._id ,users.entities, item.users)?.nameUser || 'NOT AVALIBLE' }
                    </span>
                    {/*<div className={'list-chats__item-count'}>{item.body_chats.length}</div>*/}
                </NavLink > :
                <NavLink  to={`/home/chats/group/${item._id}`} className={({ isActive, isPending }) =>
                    isPending ? "list-chats__item-link-pending" : isActive ? "list-chats__item-link-active" : "list-chats__item-link"
                }>
                    <span className={'list-chats__item-name'}>
                        {item.nameChat}
                    </span>
                    {/*<div className={'list-chats__item-count'}>{item.body_chats.length}</div>*/}
                </NavLink >}
            </li>
    );
}