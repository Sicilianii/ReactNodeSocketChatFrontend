import {Link, Outlet} from "react-router-dom";
import WhitePurpleButtonShared from "../../shared/ui/WhitePurpleButtonShared/WhitePurpleButtonShared";
import React from "react";

export default function  Main() {
    return(
        <div className={'start container'}>
            <div className={'start-head'}>
                <Outlet />
            </div>
            <div className={'start-image'}>
                <div className={'start-image__back'} ></div>
            </div>
        </div>
    );
}