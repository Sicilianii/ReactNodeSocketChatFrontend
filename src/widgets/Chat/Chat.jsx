

import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {useEffect} from "react";
import ListMessages from "./ui/ListMessages/ListMessages";
import InputMessage__features from "../../features/InputMessage/InputMessage";

export default function Chat() {

    let { chatId } = useParams();
    const messages = useSelector(state => state.profile);

    useEffect( ()=> {
        let chat = document.getElementById('chat');
        chat.scrollTop = chat.scrollHeight;
    },[messages])

    return(
        <div className={'chat'}>
            <ListMessages store={messages} id={chatId} />
            <InputMessage__features id={chatId} />
        </div>
    );
}