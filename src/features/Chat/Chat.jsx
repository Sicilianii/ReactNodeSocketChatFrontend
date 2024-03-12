

import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {useContext, useEffect} from "react";
import ListMessages from "./ui/ListMessages/ListMessages";
import InputMessage__features from "../../features/InputMessage/InputMessage";
import {ContextChat} from "../../app/context/contextChat";

export default function Chat__features() {

    const currChat = useContext(ContextChat);
    const messages = useSelector(state => state.profile);

    useEffect( ()=> {
        let chat = document.getElementById('chat');
        chat.scrollTop = chat.scrollHeight;
    },[messages])

    return(
        <div className={'chat'}>
            <ListMessages store={messages} id={currChat} />
            <InputMessage__features id={currChat} />
        </div>
    );
}