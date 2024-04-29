import { createSlice } from "@reduxjs/toolkit";
import { IUser} from "../../../shareds/types";


interface InitialProfile {
    status: string,
    auth: boolean,
    entities: IUser
}

const initialState: InitialProfile = {
    status: 'idle',
    auth: false,
    entities: {_id:''}
};

const profileInfoSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        singInProfile: (state, action) => {
            state.entities = action.payload;
            state.status = 'loaded';
            state.auth = true;
        },
        logOutProfile: (state) => {
            state.entities = { _id:''};
            state.status = 'idle';
            state.auth = false;
        },
        changeProfileName: (state, action) => {
            state.entities.nameUser = action.payload.name;
        },
        changeProfileJobTitle: (state, action) => {
            state.entities.job_title = action.payload.title;
        },
        subscription: (state) => {
            state.entities.subscription = true;
        },
        squabble: (state, action) => {
            let ID: number | undefined = state.entities.friends?.findIndex( fr => fr._id === action.payload);
            if (ID) state.entities.friends?.splice(ID, 1);
        },
        befriend: (state, action) => {
            state.entities.friends?.push(action.payload);
        }
    }
});

export const {
    squabble,
    befriend,
    subscription,
    singInProfile,
    logOutProfile,
    changeProfileName,
    changeProfileJobTitle
} = profileInfoSlice.actions;
export const profileReducer = profileInfoSlice.reducer;