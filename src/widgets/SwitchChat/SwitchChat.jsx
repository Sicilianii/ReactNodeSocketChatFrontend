import TopBarActiveUser__widget from "../TopBarActiveUser/TopBarActiveUser";
import CardActiveUser__entities from "../../entities/CardActiveUser/CardActiveUser";
import Chat__features from "../../features/Chat/Chat";
import {Navigate, useLoaderData, useParams} from "react-router-dom";
import {SocketContext} from "../../app/context/SocketContext";
import {ChatContext} from "../../app/context/ChatContext";
import React, {useContext, useEffect, useMemo} from "react";
import {useSelector} from "react-redux";

import {io} from "socket.io-client";


export default function SwitchChat__widget({type}) {

    const myProfileInfo = useSelector(state => state.profile);
    const ChatInfo = useLoaderData();
    const SOCKET = useContext(SocketContext);
    const { chatId } = useParams();

    
    console.log(myProfileInfo)

    console.log("RENDER ROUTE")
    
    SOCKET.emit('leaveConnection', chatId, myProfileInfo.entities);
    SOCKET.emit('newConnection', chatId, myProfileInfo.entities)

    

    return myProfileInfo.auth ? (

        <ChatContext.Provider value={ChatInfo}>
            <div className={'place-chat-wrapper'}>
                { type && <TopBarActiveUser__widget/> }
                <div className={'place-wrapper'}>
                    <Chat__features />
                    { type && <CardActiveUser__entities/> }
                </div>
            </div>
        </ChatContext.Provider>

    ) : <Navigate to="/singIn" />
}













































//
// const DATA = {
//     infoChat: {
//         "_id":"65ddd5d256788dcf4a6a9d06",
//         "id_chats":"$_0001",
//         "nameChat":"Work",
//         "users":["65dd9ad63a31f02dbde4ab58","65dd9ad63a31f02dbde4ab59","65dd9ad63a31f02dbde4ab5a"],
//         "body_chats":"65ddd57256788dcf4a6a9cff"
//     },
//     messagesChat: {
//         "_id": "65ddd57256788dcf4a6a9cff",
//         "body_chats": [
//             {
//                 "_id": "6602aa3381870253a9ae275b",
//                 "users_id": "65dd9ad63a31f02dbde4ab58",
//                 "time_mess": "12:20",
//                 "body_mess": "Hello, guys"
//             },
//             {
//                 "_id": "6602aa3381870253a9ae275c",
//                 "users_id": "65dd9ad63a31f02dbde4ab59",
//                 "time_mess": "12:21",
//                 "body_mess": "Hello"
//             },
//             {
//                 "_id": "6602aa3381870253a9ae275d",
//                 "users_id": "65dd9ad63a31f02dbde4ab5a",
//                 "time_mess": "12:22",
//                 "body_mess": "Hi"
//             },
//             {
//                 "_id": "6602aa3381870253a9ae275e",
//                 "users_id": "65dd9ad63a31f02dbde4ab58",
//                 "time_mess": "12:20",
//                 "body_mess": "Hello, guys"
//             }
//         ]
//     }
// }