import {useLoaderData, useParams} from "react-router-dom";
import {memo, useContext, useEffect, useState} from "react";
import ListMessages from "./ui/ListMessages/ListMessages";
import InputMessage__features from "../../features/InputMessage/InputMessage";
import { io } from "socket.io-client";
import {ContextChat} from "../../app/context/contextChat";
import {socket} from "../../app/socket/socket";



export default function Chat__features() {

    const data = useContext(ContextChat);
    const [newMessage, setNewMessage] = useState([]);

    const user = {
        name: 'Mike',
        id: '65dd9ad63a31f02dbde4ab58'
    }

    useEffect( ()=> {
        let chat = document.getElementById('chat');
        chat.scrollTop = chat.scrollHeight;
    },[newMessage])

    console.log(newMessage, 'STATE DATA')



    socket.on('NewState', (newMess) => {
        setNewMessage( perv => [])
    })

    socket.on('MailingMessages', (newMess) => {
        setNewMessage( perv => [...perv, newMess])
    })

    return(
        <div className={'chat'}>
            <ul className={'message__list'} id='chat'>

                <ListMessages messages={data.messagesChat.body_chats}/>
                <ListMessages messages={newMessage}/>

            </ul>
            <InputMessage__features sendNewMessage={setNewMessage} />
        </div>
);
}