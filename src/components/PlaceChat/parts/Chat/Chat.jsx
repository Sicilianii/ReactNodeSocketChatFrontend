import './Chat.css';
import InputMessage from "./parts/InputMessage/InputMessage";
import ListMessages from "./parts/ListMessages/ListMessages";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {useEffect} from "react";

export default function Chat() {

    let { chatId } = useParams();
    const messages = useSelector(state => state.profile);

    useEffect( ()=> {
        let chat = document.getElementById('chat');
        chat.scrollTop = chat.scrollHeight;
    },[messages])

    return(
        <div className={'chat-place'}>
            <ListMessages store={messages} id={chatId} />
            <InputMessage id={chatId} />
        </div>
    );
}