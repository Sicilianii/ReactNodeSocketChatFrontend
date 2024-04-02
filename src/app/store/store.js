import { configureStore } from "@reduxjs/toolkit";
import {UserReducer} from "../slice/usersSlice";
import {RecentChatReducer} from "../slice/recentChatSlice";
import {GroupChatReducer} from "../slice/groupChatSlice";
import {profileReducer} from "../slice/profileInfoSlice";

export const STORE = configureStore({
    reducer: {
        user: UserReducer,
        group: GroupChatReducer,
        recent: RecentChatReducer,
        profile: profileReducer
    }
});

