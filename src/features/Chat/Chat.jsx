import {useLoaderData, useParams} from "react-router-dom";
import {memo, useContext, useEffect, useState} from "react";
import ListMessages from "./ui/ListMessages/ListMessages";
import InputMessage__features from "../../features/InputMessage/InputMessage";
import { io } from "socket.io-client";
import {ContextChat} from "../../app/context/contextChat";


export default function Chat__features() {

    const data = useContext(ContextChat);
    const socket = io('http://localhost:3001');
    const user = {
        name: 'Mike',
        id: '65dd9ad63a31f02dbde4ab58'
    }

    // console.log(data, 'LOADER DATA')
    // console.log(messages, 'STATE DATA')

    useEffect(() => {
        socket.emit('newConnection', data.messagesChat._id, user)
    }, [data]);

    return(
        <div className={'chat'}>
            <ListMessages messages={data.messagesChat.body_chats} />
            <InputMessage__features id={data.messagesChat._id} />
        </div>
    );
}