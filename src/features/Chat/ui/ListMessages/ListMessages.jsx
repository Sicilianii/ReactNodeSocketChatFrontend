
import {Link} from "react-router-dom";
import Message from "../../../../entities/Message/Message";
import {getChats} from "../../../../shared/lib/helpers/GetChats";
import {useSelector} from "react-redux";
import {useState} from "react";


export default function ListMessages({store, id}) {

    // const currentChat = getChats(store.chats, id);
    // const getUser =  (data, idUser) => { return data.find( el => el.id === idUser ); }
    // const [myFriends, setMyFriends] = useState(null);

    // const data = useSelector(store => store.profile.users.then(data => setMyFriends(data)))



    return (
        <ul className={'message__list'} id='chat'> {

            store.map( (item,id) =>
                <li key={id} className={'message'}>
                    <div className={'message__img-prof'}></div>
                    <div className={'message__body'}>
                        <span className={'message__body-head'}>
                            {/*<Link className={'message__body-head-name'} to={`/profile/${getUser(store.users, item.author).id}`}>*/}
                            {/*    { getUser(store.users, item.author).nameUser }*/}
                            {/*</Link>*/}
                            {item.users_id}
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
            )}
        </ul>
    );
}