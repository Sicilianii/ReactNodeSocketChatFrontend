export const getChats = function (state ,chatId) {
    // переписать полностью функцию...
    console.log(state.groupChats)
    return (chatId.split('')[0] === '$')
        ? state.groupChats.find(el => el.id_chats === chatId).body_chats
        : state.recentChats.find(el => el.id_chats === chatId).body_chats;
}

