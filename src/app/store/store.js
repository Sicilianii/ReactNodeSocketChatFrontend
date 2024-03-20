import { configureStore } from "@reduxjs/toolkit";
import {ProfileReducer} from "../slice/slice";
import {UserReducer} from "../slice/usersSlice";


export const STORE = configureStore({
    reducer: {
        profile: ProfileReducer,
        user: UserReducer
    }
});

