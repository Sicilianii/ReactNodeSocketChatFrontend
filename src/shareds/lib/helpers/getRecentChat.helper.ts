import {LoaderFunction} from "react-router-dom";

interface Params {
    chatId: string
}

const getRecentChat: LoaderFunction = async ( {params} ) => {
    const typedParams = params as unknown as Params;
    return await fetch(`/chats/recent/${typedParams.chatId}`).then(res => res.json()).catch(err => {console.log(err)});
}

export default getRecentChat;