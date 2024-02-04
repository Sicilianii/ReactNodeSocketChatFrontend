import './PlaceChat.css';
import TopBarActiveUser from "./parts/TopBarActiveUser/TopBarActiveUser";
import Chat from "./parts/Chat/Chat";
import CardActiveUser from "./parts/CardActiveUser/CardActiveUser";

export default function PlaceChat() {
    return(
        <div className={'place-chat-col'}>
            <TopBarActiveUser />
            <div className={'chat'}>
                <Chat />
                <CardActiveUser />
            </div>
        </div>
    );
}