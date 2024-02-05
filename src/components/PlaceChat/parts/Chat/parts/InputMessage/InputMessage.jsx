import './InputMessage.css';
import ToolButtons from "./ToolButtons/ToolButtons";

export default function InputMessage() {
    return(
        <form className={'form'}>
            <input placeholder={'Type your message here...'} className={'form__textarea'}/>
            <ToolButtons />
        </form>
    );
}