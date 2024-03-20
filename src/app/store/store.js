import { configureStore } from "@reduxjs/toolkit";
import {ProfileReducer} from "../slice/slice";
import {UserReducer} from "../slice/usersSlice";
import {RecentChatReducer} from "../slice/recentChatSlice";
import {GroupChatReducer} from "../slice/groupChatSlice";


export const STORE = configureStore({
    reducer: {
        profile: ProfileReducer,
        user: UserReducer,
        group: GroupChatReducer,
        recent: RecentChatReducer
    }
});

