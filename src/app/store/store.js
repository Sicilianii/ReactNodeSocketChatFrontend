import { configureStore } from "@reduxjs/toolkit";
import {ProfileReducer} from "../slice/slice";


export const STORE = configureStore({
    reducer: {
        profile: ProfileReducer
    }
});

