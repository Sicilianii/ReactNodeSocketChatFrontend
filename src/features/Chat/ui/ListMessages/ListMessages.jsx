import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {useState} from "react";

export default function ListMessages({messages, id}) {

    const selectUsers = state => state.user;
    const users = useSelector(selectUsers);

    const [message, setMessages] = useState(messages);

    const getNameUserInChat = (users, id) => {
        let friendINFO = users.filter(user => {return user._id === id});
        return friendINFO[0];
    }

    return (
        <ul className={'message__list'} id='chat'>
            {
                message && message.map( (item,id) =>
                        <li key={id} className={'message'}>
                            <div className={'message__img-prof'}></div>
                            <div className={'message__body'}>
                                <span className={'message__body-head'}>
                                    <Link
                                        className={'message__body-head-name'}
                                        to={`/profile/${getNameUserInChat(users.entities, item.users_id)?._id || '65dd9ad63a31f02dbde4ab58'}`}
                                    >
                                        { getNameUserInChat(users.entities, item.users_id)?.nameUser || 'You'}
                                    </Link>
                                    <span className={'message__body-head-time'}> {item.time_mess}</span>
                                </span>
                                {/*<Message listMess={ item.body_mess } />*/}
                                <ul className={'message__body-text'}>

                                    <li className={'message__body-text-item'} key={id}>
                                        <span className={'message__body-text-item-p'}> {item.body_mess} </span>
                                        <span className={'message__body-text-item-time'}> {item.time_mess} </span>
                                    </li>

                                </ul>
                            </div>
                        </li>
                )
            }
        </ul>
    );
}