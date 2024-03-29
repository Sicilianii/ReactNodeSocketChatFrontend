import WhitePurpleButtonShared from "../../shared/ui/WhitePurpleButtonShared/WhitePurpleButtonShared";
import React from "react";

export default function SingIn() {
    return(
        <>
            <form className={'sing'}>
                <h1 className={'sing__h1'}>Welcome back!</h1>
                <span className={'sing__sp'}>Sign In</span>
                <input className={'sing__email'} type="text" placeholder={'Email'}/>
                <input className={'sing__pass'} type="password" placeholder={'Password'}/>
                <WhitePurpleButtonShared fontSIzeBnt={'18px'} paddingGtn={'8px 40px'}>Log In</WhitePurpleButtonShared>
            </form>
        </>
    );
}