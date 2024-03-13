import {USER} from "../app";


export async function getChat( {params} ) {
    return await fetch(`/chats/group/${params.chatId}`).then(res => res.json()).catch( err => {console.log(err)})
}

export async function getAllUsers( userID ) {
    return await fetch(`/users/${userID}`).then(res => res.json()).catch( err => {console.log(err)})
}