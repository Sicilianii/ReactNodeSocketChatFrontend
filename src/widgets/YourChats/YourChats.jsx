

import AddNewChat__features from "../../features/AddNewChat/AddNewChat";
import ChatList from "./ui/ChatList/ChatList";

export default function YourChats__widget() {
    return (
        <div className={'nav-chats'}>
            <span className={'nav-chats__heading'}>Your Chats</span>
            <div className={'nav-chats__wrapper'}>
                <ChatList />
                <AddNewChat__features />
            </div>
        </div>
    );
}