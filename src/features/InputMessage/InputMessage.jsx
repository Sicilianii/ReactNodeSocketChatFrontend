

import {useRef, useState} from "react";
import {useDispatch} from "react-redux";


import {addMessage} from "../../app/slice/slice";
import BoldFontSize from "./ui/BoldFontSize/BoldFontSize";
import PinAnything from "./ui/PinAnything/PinAnything";
import AnyLink from "./ui/AnyLink/AnyLink";
import VoiceMessage from "./ui/VoiceMessage/VoiceMessage";
import CameraMessage from "./ui/CameraMessage/CameraMessage";
import Smiles from "./ui/Smiles/Smiles";
import SubmitSendBtn from "./ui/SubmitSendBtn/SubmitSendBtn";

export default function InputMessage__features({id}) {

    const GET_TIME = () => {
        let data = new Date();
        return `${data.getHours()}:${data.getMinutes()}`
    }

    const form = useRef();

    const [currData, setCurrData] = useState({
        author: '#00002',
        message: [
            {
                time_mess: GET_TIME(),
                body_mess: ''
            }
        ]
    });

    const dispatch = useDispatch();
    const changeInpt = (e) => setCurrData(pervstate => ({...pervstate, message: [{time_mess: GET_TIME(), body_mess: e.target.value }]}));
    const sendChat = function (e) {
        e.preventDefault();
        (currData.message[0].body_mess !== '') && dispatch(addMessage( { currData, id } ));
        setCurrData( perv => ({...perv, message: [ { time_mess: '18:32', body_mess: '' } ] }));
    }

    const sendEnter = (ev) => {
        if(!ev.shiftKey && ev.keyCode==13) {
            sendChat(ev);
        }
    }


    return(
        <form ref={form} className={'form'} onSubmit={ event =>  sendChat( event ) }>
            <textarea placeholder={'Type your message here...'}
                   className={'form__textarea'}
                   onKeyDown={ (event) => sendEnter(event) }
                   onChange={ (event)=> changeInpt(event) }
                   value={currData.message[0].body_mess}/>
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