import './YourChats.css';

import AddNewChat__features from "../../features/AddNewChat/AddNewChat";
import ChatList from "./ui/ChatList/ChatList";

export default function YourChats__widget() {
    return (
        <div className={'navigation'}>
            <span className={'navigation__heading'}>Your Chats</span>
            <div className={'navigation-list'}>
                <ChatList />
                <AddNewChat__features />
            </div>
        </div>
    );
}