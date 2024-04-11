import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: 'idle',
    auth: false,
    entities: {}
};

const profileInfoSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        singInProfile: (state, action) => {
            return {...state, entities: action.payload, status: 'loaded', auth: true}
        },
        logOutProfile: (state, action) => {
            return {...state, entities: [], status: 'idle', auth: false}
        },
        changeProfileName: (state, action) => {
            return {...state, entities: {...state.entities, nameUser: action.payload.name}}
        },
        changeProfileJobTitle: (state, action) => {
            return {...state, entities: {...state.entities, job_title: action.payload.title}}
        },
        subscription: (state, action) => {
            return {...state, entities: {...state.entities, subscription: true}}
        }
    }
});

export const {subscription, singInProfile, logOutProfile, changeProfileName, changeProfileJobTitle} = profileInfoSlice.actions;
export const profileReducer = profileInfoSlice.reducer;