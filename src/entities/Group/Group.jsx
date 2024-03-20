import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {getUser} from "../../shared/lib/helpers/GetUser";
import {useState} from "react";
import {logDOM} from "@testing-library/react";


export default function Group__entities({chat, type}) {

    const selectUsers = state => state.user;
    const users = useSelector(selectUsers);

    return chat.entities.map( (item, id) =>
            <li className={'list-chats__item'} key={id}>
                {type ?
                <Link to={`/chats/recent/${item._id}`} className={'list-chats__item-link'}>
                    <span className={'list-chats__item-name'}>
                        { getUser('65dd9ad63a31f02dbde4ab58' ,users.entities, item.users) }
                    </span>
                    {/*<div className={'list-chats__item-count'}>{item.body_chats.length}</div>*/}
                </Link> :
                <Link to={`/chats/group/${item._id}`} className={'list-chats__item-link'}>
                    <span className={'list-chats__item-name'}>
                        {item.nameChat}
                    </span>
                    {/*<div className={'list-chats__item-count'}>{item.body_chats.length}</div>*/}
                </Link>}
            </li>
    );

    // return (
    //     <>Loading</>
    // )
}