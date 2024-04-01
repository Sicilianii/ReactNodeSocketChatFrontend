import WhitePurpleButtonShared from "../../shared/ui/WhitePurpleButtonShared/WhitePurpleButtonShared";
import React, {useState} from "react";
import md5 from 'md5';


export default function SingIn() {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [loading, setLoading] = useState(false);


    const trySingIn = async (event) => {
        event.preventDefault;
        setLoading(true);
        await fetch('/singIn', {
            method: "POST",
            body: {
                email: email,
                pass: md5(pass)
            }
        })
    }

    const changeEmailInput = (email) => {}
    const changePassInput = (pass) => {}

    return(
        <>
            <form className={'sing'} onSubmit={(e) => {
                trySingIn(e)
            }}>
                <h1 className={'sing__h1'}>Welcome back!</h1>
                <span className={'sing__sp'}>Sign In</span>
                <input
                    className={'sing__email'}
                    type="text"
                    placeholder={'Email'}
                    onChange={(e) => {
                        changeEmailInput(e.target.value)
                    }}
                />
                <input
                    className={'sing__pass'}
                    type="password"
                    placeholder={'Password'}
                    onChange={(e) => {
                        changePassInput(e.target.value)
                    }}
                />
                <WhitePurpleButtonShared fontSIzeBnt={'18px'} paddingGtn={'8px 40px'}>Log In</WhitePurpleButtonShared>

            </form>
        </>
    );
}