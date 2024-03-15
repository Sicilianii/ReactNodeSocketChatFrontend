

import {useLoaderData, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {useContext, useEffect} from "react";
import ListMessages from "./ui/ListMessages/ListMessages";
import InputMessage__features from "../../features/InputMessage/InputMessage";
import {ContextChat} from "../../app/context/contextChat";

export default function Chat__features() {

    const listMessages = useLoaderData();


    // useEffect( ()=> {
    //     let chat = document.getElementById('chat');
    //     chat.scrollTop = chat.scrollHeight;
    // },[messages])

    return(
        <div className={'chat'}>
            <ListMessages store={listMessages.body_chats} />
            <InputMessage__features id={listMessages._id} />
        </div>
    );
}