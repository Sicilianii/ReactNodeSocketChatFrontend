
import {Link} from "react-router-dom";
import Message from "../../../../entities/Message/Message";
import {getChats} from "../../../../shared/lib/helpers/GetChats";


export default function ListMessages({store, id}) {

    const currentChat = getChats(store.chats, id);
    const getUser =  (data, idUser) => { return data.find( el => el.id === idUser ); }

    return (
        <ul className={'message__list'} id='chat'> {
            currentChat.map( (item,id) =>

                <li key={id} className={'message'}>
                    <div className={'message__img-prof'}></div>
                    <div className={'message__body'}>
                        <span className={'message__body-head'}>
                            <Link className={'message__body-head-name'} to={`/profile/${getUser(store.users, item.author).id}`}>
                                { getUser(store.users, item.author).nameUser }
                            </Link>
                            <span className={'message__body-head-time'}> { item.message[0].time_mess }</span>
                        </span>
                        <Message listMess={ item.message } />
                    </div>
                </li>

            )}
        </ul>
    );
}