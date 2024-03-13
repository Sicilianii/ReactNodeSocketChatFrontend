import YourChats__widget from "../../widgets/YourChats/YourChats";
import Search__widget from "../../widgets/Search/Search";
import Navigation__widget from "../../widgets/Navigation/Navigation";
import {Outlet} from "react-router-dom";
import React from "react";
import {useSelector} from "react-redux";



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