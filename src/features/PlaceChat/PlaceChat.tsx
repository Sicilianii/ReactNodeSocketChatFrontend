import React, {useContext, useEffect, useState} from "react";
import {ChatContext} from "../../app/contexts";
import ListMessages from "../../entities/ListMessages/ListMessages";
import InputMessage from "../InputMessage/InputMessage";
import './_PlaceChat.scss';

export default function PlaceChat() {

    // const SOCKET = useContext(SocketContext)

    const chat = useContext(ChatContext);
    const [messages, setNewMessage] = useState(chat.body_chats.body_chats);

    useEffect( ()=> {
        let chat = document.getElementById('chat');
        if (chat) chat.scrollTop = chat.scrollHeight;
    },[messages])


    // SOCKET.on('NewState',() => {
    //     setNewMessage( perv => [])
    // })
    //
    // SOCKET.on('MailingMessages', (newMess) => {
    //     setNewMessage( perv => {
    //         if (perv.find( el => el.idMessage === newMess.idMessage)) return perv
    //         return [...perv, newMess]
    //     })
    // })

    return(
        <div className={'chat'}>
            <ul className={'message__list'} id='chat'>

                <ListMessages messages={messages}/>

            </ul>
            <InputMessage sendNewMessage={setNewMessage} />
        </div>
    );
}