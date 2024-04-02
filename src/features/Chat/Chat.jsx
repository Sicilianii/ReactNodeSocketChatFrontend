import {useContext, useEffect, useState} from "react";
import ListMessages from "./ui/ListMessages/ListMessages";
import InputMessage__features from "../../features/InputMessage/InputMessage";
import {SocketContext} from "../../app/context/SocketContext";




export default function Chat__features() {

    const SOCKET = useContext(SocketContext)

    const [newMessage, setNewMessage] = useState([]);

    useEffect( ()=> {
        let chat = document.getElementById('chat');
        chat.scrollTop = chat.scrollHeight;
    },[newMessage])

    console.log(newMessage, 'STATE DATA')

    SOCKET.on('NewState',() => {
        setNewMessage( perv => [])
    })

    SOCKET.on('MailingMessages', (newMess) => {
        setNewMessage( perv => {
            if (perv.find( el => el.idMessage === newMess.idMessage)) return perv
            return [...perv, newMess]
        })
    })

    return(
        <div className={'chat'}>
            <ul className={'message__list'} id='chat'>

                {/*<ListMessages messages={data.messagesChat.body_chats}/>*/}
                <ListMessages messages={newMessage}/>

            </ul>
            <InputMessage__features sendNewMessage={setNewMessage} />
        </div>
    );
}