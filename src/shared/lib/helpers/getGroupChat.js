export async function getGroupChat( {params} ) {
    const messagesChat = await fetch(`/chats/group/${params.chatId}`).then(res => res.json()).catch( err => {console.log(err)});
    const infoChat = await fetch(`/groups/info/${params.chatId}`).then(res => res.json()).catch( err => {console.log(err)});
    return {messagesChat, infoChat};
}