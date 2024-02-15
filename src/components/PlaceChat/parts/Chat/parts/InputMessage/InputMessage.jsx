import './InputMessage.css';
import ToolButtons from "./ToolButtons/ToolButtons";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {addMessage} from "../../../../../../slice/slice";
import {useParams} from "react-router-dom";

export default function InputMessage({id}) {

    const [currData, setCurrData] = useState({
        time_mess: '18:13',
        author: '#00002',
        body_mess: ''
    });

    const dispatch = useDispatch();
    const sendChat = function (e) {
        e.preventDefault();
        dispatch(addMessage({currData, id}));
        // setCurrData( perv => {  return {...perv, body_mess: ''} } );
    }

    return(
        <form className={'form'} onSubmit={ event =>  sendChat( event ) }>
            <input placeholder={'Type your message here...'} className={'form__textarea'} onChange={(event) =>
            {  setCurrData(pervstate => ({...pervstate, body_mess: event.target.value })); }
            }/>
            <ToolButtons />
        </form>
    );
}