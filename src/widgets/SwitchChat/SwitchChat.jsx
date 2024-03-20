import TopBarActiveUser__widget from "../TopBarActiveUser/TopBarActiveUser";
import CardActiveUser__entities from "../../entities/CardActiveUser/CardActiveUser";
import Chat__features from "../../features/Chat/Chat";
import {useLoaderData, useParams} from "react-router-dom";
import {ContextChat} from "../../app/context/contextChat";

export default function SwitchChat__widget({type}) {

    console.log('RENDER SwitchChat__widget')

    let { chatId } = useParams();
    const data = useLoaderData();
    console.log(data)

    return(
        <ContextChat.Provider value={chatId}>

            <div className={'place-chat-wrapper'}>
                { type && <TopBarActiveUser__widget/> }
                <div className={'place-wrapper'}>
                    <Chat__features />
                    { type && <CardActiveUser__entities/> }
                </div>
            </div>

        </ContextChat.Provider>
    );
}