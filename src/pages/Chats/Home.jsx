import './Home.css';

import YourChats__widget from "../../widgets/YourChats/YourChats";
import Search__widget from "../../widgets/Search/Search";

import ChatRouter from "../../app/routs/ChatRouts";

import TopBarActiveUser__widget from "../../widgets/TopBarActiveUser/TopBarActiveUser";
import CardActiveUser__entities from "../../entities/CardActiveUser/CardActiveUser";
import Navigation__widget from "../../widgets/Navigation/Navigation";


export default function Home() {
    return(
        <main className={'main container'}>
            <Navigation__widget />
            <div>
                <Search__widget />
                <div className={'main-place__chats'}>
                    <YourChats__widget />
                    <div className={'place-chat-col'}>
                        <TopBarActiveUser__widget />
                        <div className={'chat'}>
                            <ChatRouter />
                            <CardActiveUser__entities />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}