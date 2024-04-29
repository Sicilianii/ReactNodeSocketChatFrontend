import {LoaderFunction} from "react-router-dom";

interface Params {
    chatId: string
}

const getGroupChat: LoaderFunction = async ( {params} ) => {
    const typedParams = params as unknown as Params;
    return await fetch(`/chats/group/${typedParams.chatId}`).then(res => res.json()).catch( err => {console.log(err)});
}

export default getGroupChat;