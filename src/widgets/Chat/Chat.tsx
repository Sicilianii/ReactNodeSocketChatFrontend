import {Navigate, useParams} from "react-router-dom";
import React, { useEffect} from "react";
import {io} from "socket.io-client";
import {useTypedSelector} from "../../shareds/lib/hooks/useTypeSelector";
import { ChatContext } from "../../app/contexts";
import {useTypedLoaderData} from "../../shareds/lib/hooks/useTypedLoaderData";
import {IGroupChat, IRecentChat} from "../../shareds/types";
import CardActiveUser from "../../entities/CardActiveUser/CardActiveUser";
import TopBarActiveUser from "../../entities/TopBarActiveUser/TopBarActiveUser";
import PlaceChat from "../../features/PlaceChat/PlaceChat";
import './_Chat.scss';



export default function Chat({type}: {type: boolean} ) {

    const my = useTypedSelector(state => state.profile);
    const info = useTypedLoaderData<IGroupChat | IRecentChat>(); // info about current chat
    const SOCKET = io();
    const { chatId } = useParams();

    useEffect(() => {
        SOCKET.emit('leaveConnection', chatId, my.entities);
        SOCKET.emit('newConnection', chatId, my.entities)
    }, [chatId]);



    return my.auth ? (

        <ChatContext.Provider value={info}>
            <div className={'place-chat-wrapper'}>
                { type && <TopBarActiveUser /> }
                <div className={'place-wrapper'}>
                    <PlaceChat />
                    { type && <CardActiveUser />}
                </div>
            </div>
        </ChatContext.Provider>

    ) : <Navigate to="/singIn" />
}