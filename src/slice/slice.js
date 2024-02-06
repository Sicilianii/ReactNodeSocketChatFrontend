import {createSlice} from "@reduxjs/toolkit";

const initialState = {};

const ProfileSlice = createSlice({
    name: 'Profile',
    initialState,
    reducers: {
        addProfile: (state, action) => { console.log( state, action ) },
        editProfile: (state, action) => { console.log( state, action ) },
        delProfile: (state, action) => { console.log( state, action ) }
    }
});

export const {addProfile, editProfile, delProfile} = ProfileSlice.actions;
export const ProfileReducer = ProfileSlice.reducer;