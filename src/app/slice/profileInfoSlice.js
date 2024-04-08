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
        logOutProfile: () => {},
        changeProfileName: (state, action) => {
            return {...state, entities: {...state.entities, nameUser: action.payload.name}}
        },
        changeProfileJobTitle: (state, action) => {
            return {...state, entities: {...state.entities, job_title: action.payload.title}}
        }
    }
});

export const {singInProfile, logOutProfile, changeProfileName, changeProfileJobTitle} = profileInfoSlice.actions;
export const profileReducer = profileInfoSlice.reducer;