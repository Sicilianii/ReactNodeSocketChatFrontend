import './YourChats.css';
import ChatList from "./ChatList/ChatList";
import AddNewChat from "./AddNewChat/AddNewChat";

export default function YourChats() {
    return (
        <div className={'navigation'}>
            <span className={'navigation__heading'}>Your Chats</span>
            <div className={'navigation-list'}>
                <ChatList />
                <AddNewChat />
            </div>
        </div>
    );
}