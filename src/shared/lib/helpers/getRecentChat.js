export async function getRecentChat( {params} ) {
    const messagesChat = await fetch(`/chats/recent/${params.chatId}`).then(res => res.json()).catch( err => {console.log(err)});
    const infoChat = await fetch(`/recents/info/${params.chatId}`).then(res => res.json()).catch( err => {console.log(err)});
    return {messagesChat, infoChat};
}