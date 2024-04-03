import WhitePurpleButtonShared from "../../shared/ui/WhitePurpleButtonShared/WhitePurpleButtonShared";
import React, {useState} from "react";
import md5 from 'md5';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { singInProfile } from '../../app/slice/profileInfoSlice'


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
                <WhitePurpleButtonShared fontSIzeBnt={'18px'} paddingGtn={'8px 40px'}>Log In</WhitePurpleButtonShared>
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