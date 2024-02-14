import './Chat.css';
import InputMessage from "./parts/InputMessage/InputMessage";
import ListMessages from "./parts/ListMessages/ListMessages";
import ChatRouter from "../../../../routs/ChatRouts";

export default function Chat() {
    return(
        <div className={'chat-place'}>
            <ul>
                <ChatRouter />
            </ul>
            <InputMessage />
        </div>
    );
}