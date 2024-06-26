import './_SingIn.scss'
import React, {useState} from "react";
import md5 from 'md5';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {singInProfile} from "../../app/store/slices/profile.slice";
import WhitePurpleButton from "../../shareds/ui/WhitePurpleButton/WhitePurpleButton";
import {InputText} from "../../shareds/types";
import {useTypedSelector} from "../../shareds/lib/hooks/useTypeSelector";
import {getAllRecentChatAPI} from "../../app/store/slices/recent.slice";
import {getAllGroupChatAPI} from "../../app/store/slices/group.slice";


export default function SingIn() {

    const recents = useTypedSelector(state => state.recent);
    const groups = useTypedSelector(state => state.group);
    const my = useTypedSelector(state => state.profile);

    // console.log('THIS RECENT CHATS', recents);
    // console.log('THIS GROUP CHATS', groups);
    // console.log('MY', my);

    const [email, setEmail] = useState<InputText>({
        value: '',
        valid: true
    });
    const [pass, setPass] = useState<InputText>({
        value: '',
        valid: true
    });
    const [loading, setLoading] = useState<boolean>(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const trySingIn = async () => {
        setLoading(true);
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
            body: JSON.stringify({
                "email": email.value,
                "pass": md5(pass.value)
            })
        }).then(data => {
            switch (data.status) {

                case 502: setPass( (pervstate) => {
                    return {...pervstate, valid: false}
                });
                    break;

                case 501: setEmail( (pervstate) => {
                    return {...pervstate, valid: false}
                });
                    break;

                case 500:
                    setEmail( (pervstate) => {
                        return {...pervstate, valid: false}
                    });
                    setPass( (pervstate) => {
                        return {...pervstate, valid: false}
                    });
                    break;

                default: return data.json();
            }
        })
            .then(user => {
                if (user) {
                    dispatch(singInProfile(user));

                    // @ts-ignore
                    dispatch(getAllRecentChatAPI(user._id))

                    // @ts-ignore
                    dispatch(getAllGroupChatAPI(user._id))
                    setLoading(false);
                    navigate('/home');
                }
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
                <WhitePurpleButton fontSIzeBnt={'18px'} paddingGtn={'8px 40px'}>Log In</WhitePurpleButton>
                <span className={'sing__new'} >
                    New to ChatApp?
                    <Link className="sing__new-link" to={'/singUp'}>
                        Sing Up
                    </Link>
                </span>
            </form>
        </>
    );
}