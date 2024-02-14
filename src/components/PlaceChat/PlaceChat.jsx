import './PlaceChat.css';
import TopBarActiveUser from "./parts/TopBarActiveUser/TopBarActiveUser";
import Chat from "./parts/Chat/Chat";
import CardActiveUser from "./parts/CardActiveUser/CardActiveUser";
import ChatRouter from "../../routs/ChatRouts";

export default function PlaceChat() {
    return(
        <div className={'place-chat-col'}>
            <TopBarActiveUser />
            <div className={'chat'}>
                <ChatRouter />
                <CardActiveUser />
            </div>
        </div>
    );
}