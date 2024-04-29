import React, {Dispatch, FC, SetStateAction, useState} from "react";
import {useTypedSelector} from "../../shareds/lib/hooks/useTypeSelector";
import AnyLink from "./ui/AnyLink/AnyLink";
import BoldFontSize from "./ui/BoldFontSize/BoldFontSize";
import CameraMessage from "./ui/CameraMessage/CameraMessage";
import PinAnything from "./ui/PinAnything/PinAnything";
import Smiles from "./ui/Smiles/Smiles";
import SubmitSendBtn from "./ui/SubmitSendBtn/SubmitSendBtn";
import VoiceMessage from "./ui/VoiceMessage/VoiceMessage";
import {IMessages} from "../../shareds/types";
import './_InputMessage.scss';

interface InputMessage {
    sendNewMessage: Dispatch<SetStateAction<IMessages[]>>
}

const InputMessage: FC<InputMessage> = ({sendNewMessage}) => {

    const profileID = useTypedSelector( state => state.profile.entities._id);
    // const SOCKET = useContext(SocketContext);

    const GET_TIME = () => {
        let data = new Date();
        return `${data.getHours()}:${data.getMinutes()}`
    }

    const [currData, setCurrData] = useState<IMessages>(
        {
            users_id: profileID,
            time_mess: GET_TIME(),
            body_mess: ""
        }
    );

    const changeInpt = (e: React.ChangeEvent<HTMLTextAreaElement>) => setCurrData(pervstate => ({...pervstate, time_mess: GET_TIME(), body_mess: e.target.value }));


    const sendChat = (e: React.FormEvent)=> {
        e.preventDefault();
        // if (currData?.body_mess !== '') {
        //     SOCKET.emit('SendNewMessage', currData)
        // }
        sendNewMessage(pervstate => [...pervstate, currData])
        setCurrData( perv => ({...perv, time_mess: String(GET_TIME()).valueOf(), body_mess: '' }));
    }
    const sendEnter = (ev: React.KeyboardEvent) => { if(!ev.shiftKey && ev.keyCode === 13) sendChat(ev); };


    return(
        <form className={'form'} onSubmit={ (event: React.FormEvent) => sendChat(event)}>
            <textarea placeholder={'Type your message here...'}
                      className={'form__textarea'}
                      onKeyDown={ (event) => sendEnter(event) }
                      onChange={ (event)=> changeInpt(event) }
                      value={currData?.body_mess}
            />
            <div className={'form__bottom-bar'}>
                <div className={'bottom-bar'}>
                    <BoldFontSize />
                    <PinAnything />
                    <AnyLink />
                    <VoiceMessage />
                    <CameraMessage />
                    <Smiles />
                </div>
                <SubmitSendBtn />
            </div>
        </form>
    );
}

export default InputMessage;