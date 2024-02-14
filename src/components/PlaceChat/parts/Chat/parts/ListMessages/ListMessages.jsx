import './ListMessages.css';
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {getChats} from "../../../../../GetChats";


export default function ListMessages() {

    let { chatId } = useParams();
    const messages = useSelector(state => state.profile.chats);

    const currentChat = getChats(messages, chatId);

    return currentChat.map( (item,id) =>
        <li key={id} > { item.body_mess } </li>
    );
}