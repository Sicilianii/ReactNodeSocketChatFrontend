import {useContext} from "react";
import {ContextChat} from "../../../app/context/contextChat";
import {useSelector} from "react-redux";
import {getUser} from "../../lib/helpers/GetUser";

export default function UserName__shared() {
    const userInfo = useContext(ContextChat);
    const selectUsers = state => state.user;
    const users = useSelector(selectUsers);

    return (
        <span className={'user-name'}>{ getUser('65dd9ad63a31f02dbde4ab58' ,users.entities, userInfo.infoChat.users).nameUser }</span>
    );
}