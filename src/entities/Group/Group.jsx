
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {getUsers} from "../../shared/lib/helpers/GetUser";
import {useState} from "react";


export default function Group__entities({props, type}) {
    const users = useSelector(state => state.profile.users);

    const [list, setList] = useState([]);
    const [friends, setFriends] = useState([]);

    props.then(chat => {setList(chat)});
    users.then(friend => {setFriends(friend)});

    // let user = friends.filter(elem => elem._id !== '65dd9ad63a31f02dbde4ab58')[0]

    return list.map( (item, id) =>
            <li className={'list-chats__item'} key={id}>
                <Link to={`/chats/${type ? 'recent' : 'group'}/${item._id}`} className={'list-chats__item-link'}>
                    <span className={'list-chats__item-name'}>
                        {item.nameChat}
                    </span>
                    {/*<div className={'list-chats__item-count'}>{item.body_chats.length}</div>*/}
                </Link>
            </li>
    );

}