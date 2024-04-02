import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: 'idle',
    entities: {}
};

const profileInfoSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        singInProfile: (state, action) => {
            return {...state, entities: action.payload, status: 'loaded'}
        },
        logOutProfile: () => {}
    }
});

export const {singInProfile, logOutProfile} = profileInfoSlice.actions;
export const profileReducer = profileInfoSlice.reducer;