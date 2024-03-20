import {USER} from "../app";


export async function getGroupChat( {params} ) {
    const messagesChat = await fetch(`/chats/group/${params.chatId}`).then(res => res.json()).catch( err => {console.log(err)});
    const infoChat = await fetch(`/groups/info/${params.chatId}`).then(res => res.json()).catch( err => {console.log(err)});
    return {messagesChat, infoChat};
}
export async function getRecentChat( {params} ) {
    const messagesChat = await fetch(`/chats/recent/${params.chatId}`).then(res => res.json()).catch( err => {console.log(err)});
    const infoChat = await fetch(`/recents/info/${params.chatId}`).then(res => res.json()).catch( err => {console.log(err)});
    return {messagesChat, infoChat};
}

export async function getAllUsers( userID ) {
    let arr = [];
    await fetch(`/user/${userID}`)
        .then( res => res.json() )
        .then( data => { arr.push(...data) } );
    return arr;
}

export async function getAllMyRecentChats( userID ) {
    return await fetch(`/recents/${userID}`).then(res => res.json()).catch( err => {console.log(err)})
}

export async function getAllMyGroupChats( userID ) {
    return await fetch(`/groups/${userID}`).then(res => res.json()).catch( err => {console.log(err)})
}