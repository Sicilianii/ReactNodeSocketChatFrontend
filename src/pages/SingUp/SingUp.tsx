import './_SingUp.scss';
import React, {useState} from "react";
import md5 from 'md5';
import { Link, useNavigate } from "react-router-dom";
import {InputText} from "../../shareds/types";
import WhitePurpleButton from "../../shareds/ui/WhitePurpleButton/WhitePurpleButton";




export default function SingUp() {

    const [userName, setUserName] = useState<InputText>({
        value: '',
        valid: true
    });
    const [email, setEmail] = useState<InputText>({
        value: '',
        valid: true
    });
    const [pass, setPass] = useState<InputText>({
        value: '',
        valid: true
    });
    const [loading, setLoading] = useState<boolean>(false);
    const navigate = useNavigate();


    async function trySingUp ()  {
        setLoading(true);
        const response= await fetch('/singUp', {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
            },
            redirect: "follow",
            referrerPolicy: "no-referrer",
            body: JSON.stringify({
                "name": userName.value,
                "email": email.value,
                "pass": md5(pass.value)
            })
        } )
        switch (response.status) {
            case 502: setPass( (pervstate) => {return {...pervstate, valid: false}}); break;
            case 501: setEmail( (pervstate) => {return {...pervstate, valid: false}}); break;
            case 500: setEmail( (pervstate) => {
                    return {...pervstate, valid: false}
                });
                setPass( (pervstate) => {
                    return {...pervstate, valid: false}
                });
                break;
            default: setLoading(false); navigate('/singIn');
        }
    }


    return(
        <>
            <form className={'sing'} onSubmit={(e) => {
                e.preventDefault();
                trySingUp();
            }}>
                <h1 className={'sing__h1'}>Welcome ChatApp!</h1>
                <span className={'sing__sp'}>Create Account</span>
                <input style={{
                    border: email.valid ? 'none' : '1px solid red'
                }}
                       className={'sing__email'}
                       type="text"
                       placeholder={'First Name'}
                       onChange={(e) => {

                           // This place for validation field

                           setUserName( (pervstate) => {
                               return {...pervstate, value: e.target.value, valid: true}
                           })
                       }}
                />
                <input style={{
                    border: email.valid ? 'none' : '1px solid red'
                }}
                       className={'sing__email'}
                       type="text"
                       placeholder={'Email'}
                       onChange={(e) => {

                           // This place for validation field

                           setEmail( (pervstate) => {
                               return {...pervstate, value: e.target.value, valid: true}
                           })
                       }}
                />
                <input style={{
                    border: pass.valid ? 'none' : '1px solid red'
                }}
                       className={'sing__pass'}
                       type="password"
                       placeholder={'Password'}
                       onChange={(e) => {

                           // This place for validation field

                           setPass( (pervstate) => {
                               return {...pervstate, value: md5(e.target.value), valid: true}
                           })
                       }}
                />
                <WhitePurpleButton fontSIzeBnt={'18px'} paddingGtn={'8px 40px'}>Sing Up</WhitePurpleButton>
                <span className={'sing__new'} >
                    Have an account?
                    <Link className="sing__new-link" to={'/singIn'}>
                        Sign In
                    </Link>
                </span>
            </form>
        </>
    );
}