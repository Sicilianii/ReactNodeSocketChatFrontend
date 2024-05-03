import AddNewChat from "../../features/AddNewChat/AddNewChat";
import AccordChats from "../../features/AccordChats/AccordChats";
import {useTypedSelector} from "../../shareds/lib/hooks/useTypeSelector";
import {NavLink} from "react-router-dom";
import './_YourChats.scss';


export default function YourChats() {

    const recents = useTypedSelector(state => state.recent.entities);
    const groups = useTypedSelector(state => state.group.entities)
    const my = useTypedSelector(state => state.profile.entities);


    return  (
        <div className={'nav-chats'}>
            <span className={'nav-chats__heading'}>Your Chats</span>
            <div className={'nav-chats__wrapper'}>
                <ul className={'chat-list'}>

                    <AccordChats heading={'Group'}>
                        {
                            groups.map((item, id) =>
                                    <NavLink key={id} to={`/home/chats/group/${item._id}`}  className={({ isActive, isPending }) =>
                                        isPending ? "list-chats__item-link-pending" : isActive ? "list-chats__item-link-active" : "list-chats__item-link"
                                    }>
                                        <span className={'list-chats__item-name'}>{ item.nameChat }</span>
                                    </NavLink >
                            )
                        }
                    </AccordChats>
                    <AccordChats heading={'Recent'}>
                        {
                            recents.map((item, id) =>
                                <NavLink key={id} to={`/home/chats/recent/${item._id}`} className={({ isActive, isPending }) =>
                                    isPending ? "list-chats__item-link-pending" : isActive ? "list-chats__item-link-active" : "list-chats__item-link"
                                }>
                                    <span className={'list-chats__item-name'}>{ String(item.users?.find( u => u._id !== my._id)?.nameUser).valueOf() || 'unknown' }</span>
                                </NavLink >
                            )
                        }
                    </AccordChats>

                </ul>
                <AddNewChat />
            </div>
        </div>
    );
}