import {USER} from "../app";


export async function getChat( {params} ) {
    return await fetch(`/chats/group/${params.chatId}`).then(res => res.json()).catch( err => {console.log(err)})
}

export async function getAllUsers( userID ) {
    return await fetch(`/user/${userID}`).then(res => res.json()).catch( err => {console.log(err)})
}

export async function getAllMyRecentChats( userID ) {
    return await fetch(`/recents/${userID}`).then(res => res.json()).catch( err => {console.log(err)})
}

export async function getAllMyGroupChats( userID ) {
    return await fetch(`/groups/${userID}`).then(res => res.json()).catch( err => {console.log(err)})
}