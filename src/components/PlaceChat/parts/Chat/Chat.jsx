import './Chat.css';
import InputMessage from "./parts/InputMessage/InputMessage";
import ListMessages from "./parts/ListMessages/ListMessages";

export default function Chat() {
    return(
        <div className={'chat-place'}>
            <ListMessages />
            <InputMessage />
        </div>
    );
}