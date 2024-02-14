import {useSelector} from "react-redux";

export const getChats = function (state ,chatId) {
    return (chatId.split('')[0] === '$')
        ? state.groupChats.find(el => el.id_chats === chatId).body_chats
        : state.recentChats.find(el => el.id_chats === chatId).body_chats;
}