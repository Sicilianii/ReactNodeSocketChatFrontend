import './Chat.css';
import InputMessage from "./parts/InputMessage/InputMessage";
import ListMessages from "./parts/ListMessages/ListMessages";
import ChatRouter from "../../../../routs/ChatRouts";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";

export default function Chat() {

    let { chatId } = useParams();
    const messages = useSelector(state => state.profile.chats);

    return(
        <div className={'chat-place'}>
            <ul>
                <ListMessages list={messages} id={chatId} />
            </ul>
            <InputMessage id={chatId} />
        </div>
    );
}