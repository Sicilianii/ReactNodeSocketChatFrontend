
import CallButtons from "../../entities/CallButtons/CallButtons";
import {useContext} from "react";
import {ContextChat} from "../../app/context/contextChat";
import {getUser} from "../../shared/lib/helpers/GetUser";
import {useSelector} from "react-redux";

export default function TopBarActiveUser__widget() {

    const userInfo = useContext(ContextChat);
    const selectUsers = state => state.user;
    const users = useSelector(selectUsers);

    return(
        <section className={'top-bar'}>
            <div className={'top-bar__user'}>{ getUser('65dd9ad63a31f02dbde4ab58' ,users.entities, userInfo.infoChat.users).nameUser }</div>
            <CallButtons />
        </section>
    );
}