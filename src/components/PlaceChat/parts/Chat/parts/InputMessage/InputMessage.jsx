import './InputMessage.css';
import ToolButtons from "./ToolButtons/ToolButtons";

export default function InputMessage() {
    return(
        <form className={'form'}>
            <textarea placeholder={'Type your message here...'}/>
            <ToolButtons />
        </form>
    );
}