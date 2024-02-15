export const getUsers = function ( users ,chatId) {
    return (chatId.split('')[0] === '$')
        ? users.groupChats.find(el => el.id_chats === chatId).body_chats
        : users.recentChats.find(el => el.id_chats === chatId).body_chats;
}