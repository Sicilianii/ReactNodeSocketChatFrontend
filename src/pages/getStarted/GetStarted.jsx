
import {createBrowserRouter, Link} from "react-router-dom";
import WhitePurpleButtonShared from "../../shared/ui/WhitePurpleButtonShared/WhitePurpleButtonShared";
import Home from "../Chats/Home";
import NotFound from "../NotFound/NotFound";
import PleaseSelectChat_routes from "../../app/routes/PleaseSelectChat_routes";
import NotFoundChat_routes from "../../app/routes/NotFoundChat_routes";
import SwitchChat__widget from "../../widgets/SwitchChat/SwitchChat";
import React from "react";

export default function  GetStarted() {

    console.log("RENDER START")


    return(
        <>
            <span className={'start-head__heading'}>Welcome to CommuniHub!</span>
            <h1 className={'start-head__h1'}>Discover your</h1>
            <p className={'start-head__des'}>Find out what topics you find interesting, learn new skills, and connect
                with like-minded individuals.</p>
            <Link to={'/logIn'} className={'start-head__btn'}>
                <WhitePurpleButtonShared fontSIzeBnt={'18px'} paddingGtn={'8px 40px'}>Get
                    started</WhitePurpleButtonShared>
            </Link>
        </>
    );
}