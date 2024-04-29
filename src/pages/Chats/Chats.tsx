import {Navigate, Outlet} from "react-router-dom";
import React from "react";
import {useTypedSelector} from "../../shareds/lib/hooks/useTypeSelector";
import Navigation from "../../widgets/Navigation/Navigation";
import YourChats from "../../widgets/YourChats/YourChats";



export default function Chats() {

    const profile = useTypedSelector( state => state.profile);

    return profile.auth ? (
        // <SocketContext.Provider value={socket}>
            <main className={'main container'}>
                <Navigation />
                <div className={'page-wrapper'}>
                    <div className={'chat-wrapper'}>
                        <YourChats />
                        <Outlet  />
                    </div>
                </div>
            </main>
        // </SocketContext.Provider>
    ) : <Navigate to="/singIn" />
}