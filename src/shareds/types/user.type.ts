import {IGroupChat} from "./group.type";
import {IRecentChat} from "./recent.type";

export interface IUser {
    _id: string,
    nameUser?: string
    chats?: {
        recentChats?: IRecentChat[],
        groupChats?: IGroupChat[]
    },
    friends?: IUser[],
    email?: string,
    pass?: string,
    job_title?: String,
    phone?: string,
    subscription?: boolean
}