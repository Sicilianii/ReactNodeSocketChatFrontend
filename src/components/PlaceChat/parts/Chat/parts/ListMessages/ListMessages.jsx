import './ListMessages.css';
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {Fragment} from "react";

export default function ListMessages() {

    let { chatId } = useParams();
    const messages = useSelector(state => state.profile.chats.groupChats);
    const currentChat = messages.filter( el => el.id_chats = chatId);

    return currentChat.body_chats.map( (item,id) =>
       <Fragment key={id}>
           <li>{item.body_mess}</li>
       </Fragment>
    );
}