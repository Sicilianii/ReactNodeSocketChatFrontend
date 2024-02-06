import { configureStore} from "@reduxjs/toolkit";
import {ProfileReducer} from "../slice/slice";

export const store = configureStore({
    reducer: {
        profile: ProfileReducer
    }
});

