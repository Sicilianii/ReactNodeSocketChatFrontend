import WhitePurpleButtonShared from "../../shared/ui/WhitePurpleButtonShared/WhitePurpleButtonShared";
import React, {useState} from "react";
import md5 from 'md5';
import { json } from "react-router-dom";
import { useDispatch } from "react-redux";


export default function SingIn() {

    const [email, setEmail] = useState({
        value: '',
        valid: true
    });
    const [pass, setPass] = useState({
        value: '',
        valid: true
    });
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();


    const trySingIn = async () => {
        setLoading(true);
        console.log(email, pass, 'its data User');
        await fetch('/singIn', {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
              "Content-Type": "application/json",
            },
            redirect: "follow",
            referrerPolicy: "no-referrer",
            method: "POST",
            body: JSON.stringify({
                "email": email,
                "pass": md5(pass)
            })
        }).then(data => data.json())
        .then(user => {
            // dispatch();
            setLoading(false);
        })
        .catch(e => { console.log(e); setLoading(false) })
    }

    // const changeEmailInput = (email) => {}
    // const changePassInput = (pass) => {}

    return(
        <>
            <form className={'sing'} onSubmit={(e) => {
                e.preventDefault();
                trySingIn();
            }}>
                <h1 className={'sing__h1'}>Welcome back!</h1>
                <span className={'sing__sp'}>Sign In</span>
                <input
                    className={'sing__email'}
                    type="text"
                    placeholder={'Email'}
                    onChange={(e) => {
                        setEmail( (pervstate) => {
                            return {...pervstate, value: e.target.value}
                        })
                    }}
                />
                <input
                    className={'sing__pass'}
                    type="password"
                    placeholder={'Password'}
                    onChange={(e) => {
                        setPass( (pervstate) => {
                            return {...pervstate, value: md5(e.target.value)}
                        })
                    }}
                />
                <WhitePurpleButtonShared fontSIzeBnt={'18px'} paddingGtn={'8px 40px'}>Log In</WhitePurpleButtonShared>

            </form>
        </>
    );
}