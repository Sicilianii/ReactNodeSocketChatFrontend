import './InputMessage.css';

import {useState} from "react";
import {useDispatch} from "react-redux";

import ToolButtons from "../../entities/ToolButtons/ToolButtons";
import {addMessage} from "../../app/slice/slice";

export default function InputMessage({id}) {

    const GET_TIME = () => {
        let data = new Date();
        return `${data.getHours()}:${data.getMinutes()}`
    }

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

    return(
        <form className={'form'} onSubmit={ event =>  sendChat( event ) }>
            <input placeholder={'Type your message here...'} className={'form__textarea'} onChange={ (event)=> changeInpt(event) } value={currData.message[0].body_mess}/>
            <ToolButtons />
        </form>
    );
}