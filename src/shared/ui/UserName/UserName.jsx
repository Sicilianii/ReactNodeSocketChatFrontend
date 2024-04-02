import {useContext} from "react";
import {ChatContext} from "../../../app/context/ChatContext";
import {useSelector} from "react-redux";
import {getUser} from "../../lib/helpers/GetUser";

export default function UserName__shared() {
    
    const ChatInfo = useContext(ChatContext);
    const selectUsers = state => state.user;
    const users = useSelector(selectUsers);
    const profile = useSelector( state => state.profile.entities);

    return (
        <span className={'user-name'}>{ getUser(profile._id ,users.entities, ChatInfo.infoChat.users)?.nameUser }</span>
    );
}