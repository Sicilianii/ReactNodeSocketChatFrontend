import {IBodyChats} from "./message.type";
import {IUser} from "./user.type";

export interface IRecentChat {
    _id: string,
    users?: IUser[],
    body_chats: IBodyChats
}