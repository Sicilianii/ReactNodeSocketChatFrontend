import React, { useState} from "react";
import './_AddNewChat.scss';
import {useNavigate} from "react-router-dom";
import {useTypedSelector} from "../../shareds/lib/hooks/useTypeSelector";
import WhitePurpleButton, {TypeBtn} from "../../shareds/ui/WhitePurpleButton/WhitePurpleButton";
import MemoModalWindow from "../../entities/ModalWindow/ModalWindow";
import {IUser} from "../../shareds/types";
import ChangeListFriendsForChat from "../ChangeListFriendsForChat/ChangeListFriendsForChat";


export default function AddNewChat() {

    const myProfileInfo = useTypedSelector(state => state.profile);
    const navigate = useNavigate();
    const [close, setClose] = useState(false); // use
    const [loading, setLoading] = useState(false);
    const [usersInChat, setUsersInChat] = useState<IUser[]>([]);


    const [nameChat, setNameChat] = useState({
        value: '',
        valid: true
    });
    const body = {
        name: nameChat.value,
        users: [myProfileInfo.entities._id, ...usersInChat]
    }


    const createNewChatAPI = async () => {
        setLoading(true);
        await fetch('/group/new', {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
            },
            redirect: "follow",
            referrerPolicy: "no-referrer",
            body: JSON.stringify(body)
        }).then(data => data.json() )
            .then(user => {
                if (user) {
                    setLoading(false);
                    setClose(state => !state);
                    navigate(`/home`);
                }
            })
            .catch(e => { console.log(e); setLoading(false); setClose(state => !state); })
    }

    console.log(myProfileInfo.entities.friends)


    return(
        <>
            <button className={'add-chat-btn'} onClick={ ()=> setClose(!close) }>
                <svg className={'add-chat-btn__svg'} viewBox="0 0 512 512">
                    <path
                        d="M421.7 220.3L188.5 453.4L154.6 419.5L158.1 416H112C103.2 416 96 408.8 96 400V353.9L92.51 357.4C87.78 362.2 84.31 368 82.42 374.4L59.44 452.6L137.6 429.6C143.1 427.7 149.8 424.2 154.6 419.5L188.5 453.4C178.1 463.8 165.2 471.5 151.1 475.6L30.77 511C22.35 513.5 13.24 511.2 7.03 504.1C.8198 498.8-1.502 489.7 .976 481.2L36.37 360.9C40.53 346.8 48.16 333.9 58.57 323.5L291.7 90.34L421.7 220.3zM492.7 58.75C517.7 83.74 517.7 124.3 492.7 149.3L444.3 197.7L314.3 67.72L362.7 19.32C387.7-5.678 428.3-5.678 453.3 19.32L492.7 58.75z"></path>
                </svg>
                <span className={'add-chat-btn__name'}>New Chat</span>
            </button>
            <MemoModalWindow statusWind={close} handleClose ={setClose}>
                <form className={'modal-form'} onSubmit={ (e) => {
                    e.preventDefault();
                    if (usersInChat.length) createNewChatAPI();
                }}>
                    <span className={'modal-form__sp'}>Create new chat</span>
                    <input style={{
                        border: nameChat.valid ? 'none' : '1px solid red',
                        width: '100%'
                    }}
                           className={'sing__email'}
                           type="text"
                           placeholder={'Name Chat'}
                           onChange={(e) => {

                               // This place for validation field

                               setNameChat((pervstate) => {
                                   return {...pervstate, value: e.target.value, valid: true}
                               })
                           }}
                    />
                    <span className={'modal-form__head'}>Add participants to the conversation (min 1)</span>
                    <ul className={'profile-friends-wrapper'} style={{
                        outline: usersInChat.length ? 'none' : '1px solid red'
                    }}>

                        {
                            myProfileInfo.entities.friends?.map( (el: IUser, id: number) =>  <ChangeListFriendsForChat friend={el} friendID={id} addUser={setUsersInChat}/>)
                        }

                    </ul>
                    <WhitePurpleButton className={'profile-friends__link'} type={TypeBtn.SUBMIT}
                                             backgroundBtn={'rgb(143, 13, 239)'}
                                             colorText={'rgb(255, 255, 255)'}
                                             fontSIzeBnt={'16px'}
                                             fontWeightBnt={'600'}
                                             widthBtn={'80px'}
                                             disable={loading}
                    >
                        { loading ?
                            <svg className={'spinner'} fill="rgb(255, 255, 255)" width="20" height="20" viewBox="0 0 32 32" version="1.1"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M16 0.75c-0.69 0-1.25 0.56-1.25 1.25s0.56 1.25 1.25 1.25v0c7.042 0.001 12.75 5.71 12.75 12.751 0 3.521-1.427 6.709-3.734 9.016v0c-0.226 0.226-0.365 0.538-0.365 0.883 0 0.69 0.56 1.25 1.25 1.25 0.346 0 0.659-0.14 0.885-0.367l0-0c2.759-2.76 4.465-6.572 4.465-10.782 0-8.423-6.828-15.251-15.25-15.251h-0z"></path>
                            </svg> : 'Create' }
                    </WhitePurpleButton>
                </form>
            </MemoModalWindow>
        </>
    );
}