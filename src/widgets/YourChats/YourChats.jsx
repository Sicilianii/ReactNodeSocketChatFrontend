
import AddNewChat__features from "../../features/AddNewChat/AddNewChat";
import SelectChat__features from "../../features/SelectChat/SelectChat";



export default function YourChats__widget() {
    return (
        <div className={'nav-chats'}>
            <span className={'nav-chats__heading'}>Your Chats</span>
            <div className={'nav-chats__wrapper'}>
                <ul className={'chat-list'}>
                    <SelectChat__features typeChat={false}/>
                    <SelectChat__features typeChat={true}/>
                </ul>
                <AddNewChat__features/>
            </div>
        </div>
);
}