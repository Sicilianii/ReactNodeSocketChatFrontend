
import CallButtons from "../../entities/CallButtons/CallButtons";
import {useContext} from "react";
import {ChatContext} from "../../app/context/ChatContext";
import {getUser} from "../../shared/lib/helpers/GetUser";
import {useSelector} from "react-redux";

export default function TopBarActiveUser__widget() {

    const ChatInfo = useContext(ChatContext);
    const profile = useSelector( state => state.profile.entities);

    const selectUsers = state => state.user;
    const users = useSelector(selectUsers);

    return(
        <section className={'top-bar'}>
            <div className={'top-bar__user'}>{ getUser(profile._id ,users.entities, ChatInfo.infoChat.users).nameUser }</div>
            <CallButtons />
        </section>
    );
}