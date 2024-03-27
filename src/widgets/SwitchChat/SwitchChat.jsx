import TopBarActiveUser__widget from "../TopBarActiveUser/TopBarActiveUser";
import CardActiveUser__entities from "../../entities/CardActiveUser/CardActiveUser";
import Chat__features from "../../features/Chat/Chat";
import {useLoaderData} from "react-router-dom";
import {ContextChat} from "../../app/context/contextChat";
import {memo, useEffect, useMemo} from "react";
import {io} from "socket.io-client";
import {socket} from "../../app/socket/socket";


export default function SwitchChat__widget({type}) {
    const data = useLoaderData();

    const user = {
        name: 'Mike',
        id: '65dd9ad63a31f02dbde4ab58'
    }

    useEffect(() => {
        socket.emit('newConnection', data.messagesChat._id, user)
        console.log('new connect')
    }, [data]);

    const memoContextData = useMemo(() => {
        return data;
    }, [data]);

    return(
        <ContextChat.Provider value={memoContextData}>

            <div className={'place-chat-wrapper'}>
                { type && <TopBarActiveUser__widget/> }
                <div className={'place-wrapper'}>
                    <Chat__features />
                    { type && <CardActiveUser__entities/> }
                </div>
            </div>

        </ContextChat.Provider>
    );
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