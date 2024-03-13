
import { useSelector, useDispatch } from 'react-redux'
import Group__entities from "../../entities/Group/Group";
import {useState} from "react";


export default function SelectChat__features({ typeChat }) {

    const [drop, setDrop] = useState(false);

    const HOC__Chat = function (Component) {
        return (props) => { return <Component {...props} />}
    }

    const dropedMenu = () => setDrop(!drop);

    const RecentChat = HOC__Chat(Group__entities);
    const GroupeChat = HOC__Chat(Group__entities);

    const chatList = useSelector(state => state.profile.chats);

    return(
            <li className={'chat-list__item'}>
                <button className={'chat-list__item-btn'} onClick={ dropedMenu }>
                    <span className={'chat-list__item-btn-name'}>{ typeChat ? 'Recent SwitchChat' : 'Group SwitchChat' }</span>
                    <svg className={"chat-list__item-btn-svg"} width="12" height="12" fill="#fff" viewBox="0 0 448 512" style={{ rotate: drop ? '180deg' : '0deg', transition: "all 400ms"}}>
                        <path
                            d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                    </svg>
                </button>
                <ul className={'list-chats'} style={{display: drop ? "block" : 'none'}}>

                  { typeChat ? <RecentChat type={true} props={chatList.recentChats}/> : <GroupeChat type={false} props={chatList.groupChats}/> }

                </ul>
            </li>
    );
}
