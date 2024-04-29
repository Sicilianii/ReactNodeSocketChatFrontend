import './_layout.scss';

import { Outlet } from "react-router-dom";
import React from "react";

const Layout = () => {
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

export default Layout;