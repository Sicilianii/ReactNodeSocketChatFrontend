import {Navigate, useParams} from "react-router-dom";
import React, {useEffect, useMemo} from "react";
// import {io} from "socket.io-client";
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
    const info: IGroupChat | IRecentChat = useTypedLoaderData<IGroupChat | IRecentChat>(); // info about current chat
    // const SOCKET = io();
    const { chatId } = useParams();

    const memoInfo: IGroupChat | IRecentChat = useMemo< IGroupChat | IRecentChat >(() => info,[info._id]);

    // useEffect(() => {
    //     SOCKET.emit('leaveConnection', chatId, my.entities);
    //     SOCKET.emit('newConnection', chatId, my.entities)
    // }, [chatId]);

    // console.log(info, 'info')


    return my.auth ? (

        <ChatContext.Provider value={memoInfo}>
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