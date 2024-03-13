

import YourChats__widget from "../../widgets/YourChats/YourChats";
import Search__widget from "../../widgets/Search/Search";

import TopBarActiveUser__widget from "../../widgets/TopBarActiveUser/TopBarActiveUser";
import CardActiveUser__entities from "../../entities/CardActiveUser/CardActiveUser";
import Navigation__widget from "../../widgets/Navigation/Navigation";
import {Outlet} from "react-router-dom";
import Chat__widget from "../../widgets/SwitchChat/SwitchChat";
import React from "react";



export default function Home() {

    return(
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
    );
}