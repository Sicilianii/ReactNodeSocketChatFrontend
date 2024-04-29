import React, {useContext} from "react";
import CallButtons from "../CallButtons/CallButtons";
import {useTypedSelector} from "../../shareds/lib/hooks/useTypeSelector";
import {ChatContext} from "../../app/contexts";
import './_TopBarActiveUser.scss';


const TopBarActiveUser = () => {

    const myID = useTypedSelector(state => state.profile.entities._id);
    const chat = useContext(ChatContext);




    return(
        <section className={'top-bar'}>
            <div className={'top-bar__user'}>
                {
                    chat?.users?.find( u => u._id !== myID)?.nameUser || 'unknown'
                }
            </div>
            <CallButtons />
        </section>
    );
}

export default TopBarActiveUser;