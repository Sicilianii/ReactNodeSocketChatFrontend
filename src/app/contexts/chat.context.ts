import {createContext} from "react";
import {IGroupChat, IRecentChat} from "../../shareds/types";

export const ChatContext = createContext<IGroupChat | IRecentChat>({_id: '',body_chats: {_id: '', body_chats: []}});