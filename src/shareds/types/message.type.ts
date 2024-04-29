import {IUser} from "./user.type";

export interface IBodyChats {
    _id: string,
    body_chats: IMessages[]
}

export interface IMessages {
    users_id: string,
    time_mess: string,
    body_mess: string
}