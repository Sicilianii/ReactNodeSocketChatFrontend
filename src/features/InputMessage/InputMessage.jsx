import {useContext, useRef, useState} from "react";
import {useDispatch} from "react-redux";
import BoldFontSize from "./ui/BoldFontSize/BoldFontSize";
import PinAnything from "./ui/PinAnything/PinAnything";
import AnyLink from "./ui/AnyLink/AnyLink";
import VoiceMessage from "./ui/VoiceMessage/VoiceMessage";
import CameraMessage from "./ui/CameraMessage/CameraMessage";
import Smiles from "./ui/Smiles/Smiles";
import SubmitSendBtn from "./ui/SubmitSendBtn/SubmitSendBtn";
import {ContextChat} from "../../app/context/contextChat";


export default function InputMessage__features({sendNewMessage}) {

    const SOCKET = useContext(ContextChat)

    const user = {
        name: 'Mike',
        id: '65dd9ad63a31f02dbde4ab58'
    }
    const GET_TIME = () => {
        let data = new Date();
        return `${data.getHours()}:${data.getMinutes()}`
    }
    const [currData, setCurrData] = useState(
        {
            users_id: user.id,
            time_mess: GET_TIME(),
            body_mess: ""
        }
    );
    const changeInpt = (e) => setCurrData(pervstate => ({...pervstate, time_mess: GET_TIME(), body_mess: e.target.value }));


    const sendChat = (e)=> {
        e.preventDefault();
        if (currData?.body_mess !== '') {
            SOCKET.emit('SendNewMessage', currData)
            // sendNewMessage( pervstate => [...pervstate, currData] )
        }
        setCurrData( perv => ({...perv, time_mess: GET_TIME(), body_mess: '' }));
    }
    const sendEnter = (ev) => { if(!ev.shiftKey && ev.keyCode === 13) sendChat(ev); };


    return(
        <form className={'form'} onSubmit={ (event) => sendChat(event)}>
            <textarea placeholder={'Type your message here...'}
                   className={'form__textarea'}
                   onKeyDown={ (event) => sendEnter(event) }
                   onChange={ (event)=> changeInpt(event) }
                   value={currData?.body_mess}
            />
            <div className={'form__bottom-bar'}>
                <div className={'bottom-bar'}>
                    <BoldFontSize/>
                    <PinAnything/>
                    <AnyLink/>
                    <VoiceMessage/>
                    <CameraMessage/>
                    <Smiles/>
                </div>
                <SubmitSendBtn/>
            </div>
        </form>
    );
}