import {IUser} from "./user.type";
import {IBodyChats} from "./message.type";

export interface IGroupChat {
    _id: string,
    nameChat?: string,
    users?: IUser[],
    body_chats: IBodyChats
}

