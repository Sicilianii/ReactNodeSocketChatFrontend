import './Chat.css';
import InputMessage from "./parts/InputMessage/InputMessage";
import ListMessages from "./parts/ListMessages/ListMessages";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";

export default function Chat() {

    let { chatId } = useParams();
    const messages = useSelector(state => state.profile);

    return(
        <div className={'chat-place'}>
            <ul className={'message__list'}>
                <ListMessages store={messages} id={chatId} />
            </ul>
            <InputMessage id={chatId} />
        </div>
    );
}