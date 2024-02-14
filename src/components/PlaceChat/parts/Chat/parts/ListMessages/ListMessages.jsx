import './ListMessages.css';
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {getChats} from "../../../../../GetChats";


export default function ListMessages({list, id}) {
    const currentChat = getChats(list, id);
    return currentChat.map( (item,id) =>
        <li key={id} > { item.body_mess } </li>
    );
}