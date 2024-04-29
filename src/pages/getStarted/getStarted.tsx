import React from "react";
import { Link } from "react-router-dom";
import {useTypedSelector} from "../../shareds/lib/hooks/useTypeSelector";
import WhitePurpleButton from "../../shareds/ui/WhitePurpleButton/WhitePurpleButton";
import './_getStarted.scss';

export default function  GetStarted() {
    const profile = useTypedSelector( state => state.profile);

    return(
        <>
            <span className={'start-head__heading'}>Welcome to CommuniHub!</span>
            <h1 className={'start-head__h1'}>Discover your</h1>
            <p className={'start-head__des'}>Find out what topics you find interesting, learn new skills, and connect
                with like-minded individuals.</p>
            <Link to={profile.auth ? '/home' : '/singIn'} className={'start-head__btn'}>
                <WhitePurpleButton fontSIzeBnt={'18px'} paddingGtn={'8px 40px'}>Get
                    started</WhitePurpleButton>
            </Link>
        </>
    );
}