import './ChatList.css';
import { useSelector, useDispatch } from 'react-redux'
import Group__entities from "../../../../entities/Group/Group";




export default function ChatList() {

    const HOC__Chat = function (Component) {
        return (props) => { return <Component {...props} />}
    }

    const PrivateChat = HOC__Chat(Group__entities);
    const GroupeChat = HOC__Chat(Group__entities);

    const dispatch= useDispatch();
    const chatList = useSelector(state => state.profile.chats);

    return(
        <ul className={'list-group'}>

            <li className={'list-group__item'}>
                <button className={'list-group__btn'}>
                    <span className={'list-group__item-name'}>Private Chat</span>
                    <span className={'list-group__item-arrow'}>v</span>
                </button>
                <ul className={'list-chats'}>

                    <PrivateChat props = {chatList.recentChats} />

                </ul>
            </li>

            <li className={'list-group__item'}>
                <button className={'list-group__btn'}>
                    <span className={'list-group__item-name'}>Group Chat</span>
                    <span className={'list-group__item-arrow'}>v</span>
                </button>
                <ul className={'list-chats'}>

                    <GroupeChat props = {chatList.groupChats} />

                </ul>
            </li>

        </ul>
    );
}