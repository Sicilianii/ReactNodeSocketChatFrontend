import YourChats__widget from "../../widgets/YourChats/YourChats";
import Search__widget from "../../widgets/Search/Search";
import Navigation__widget from "../../widgets/Navigation/Navigation";
import {Outlet} from "react-router-dom";
import React from "react";
import {useSelector} from "react-redux";
import {STORE} from "../../app/store/store";
import {getAllUsersAPI} from "../../app/slice/usersSlice";
import {getAllGroupChatAPI} from "../../app/slice/groupChatSlice";
import {getAllRecentChatAPI} from "../../app/slice/recentChatSlice";
import {io} from "socket.io-client";
import {SocketContext} from "../../app/context/SocketContext";


export default function Home() {

    const profile = useSelector( state => state.profile.entities);

    STORE.dispatch(getAllUsersAPI(profile._id));
    STORE.dispatch(getAllGroupChatAPI(profile._id));
    STORE.dispatch(getAllRecentChatAPI(profile._id));

    const socket = io();

    console.log("RENDER HOME")

    return(
        <SocketContext.Provider value={socket}>
            <main className={'main container'}>
                <Navigation__widget />
                <div className={'page-wrapper'}>
                    <Search__widget />
                    <div className={'chat-wrapper'}>
                        <YourChats__widget />
                        <Outlet  />
                    </div>
                </div>
            </main>
        </SocketContext.Provider>
    );
}