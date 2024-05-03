import {defer, LoaderFunction} from "react-router-dom";

interface Params {
    chatId: string
}

const getGroupChat: LoaderFunction = async ( {params} ) => {
    const typedParams = params as unknown as Params;
    const result = await fetch(`/chats/group/${typedParams.chatId}`).then(res => res.json()).catch( err => {console.log(err)});
    return defer({result});
}

export default getGroupChat;