import './PlaceChat.css';
import TopBarActiveUser from "./parts/TopBarActiveUser/TopBarActiveUser";
import Chat from "./parts/Chat/Chat";
import CardActiveUser from "./parts/CardActiveUser/CardActiveUser";

export default function PlaceChat() {
    return(
        <>
            <TopBarActiveUser />
            <div className={'chat'}>
                <Chat />
                <CardActiveUser />
            </div>
        </>
    );
}