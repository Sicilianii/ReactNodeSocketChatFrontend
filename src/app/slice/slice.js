import {createSlice} from "@reduxjs/toolkit";
import {getChats} from "../../shared/lib/helpers/GetChats";
import {getAllMyGroupChats, getAllMyRecentChats, getAllUsers} from "../../functionsAPI/requestAPI";


const initialState = {
    users: await getAllUsers('65dd9ad63a31f02dbde4ab58'),
    chats: {
        recentChats: await getAllMyRecentChats('65dd9ad63a31f02dbde4ab58'),
        groupChats: await getAllMyGroupChats('65dd9ad63a31f02dbde4ab58')
    }
};

const ProfileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        addProfile: (state, action) => { console.log( state, action ) },
        editProfile: (state, action) => { console.log( state, action ) },
        delProfile: (state, action) => { console.log( state, action ) },

        addMessage: (state, action) => {
            let DATA = action.payload.currData;
            let arr = getChats(state.chats, action.payload.id);
            if (arr.at(-1).author === DATA.author) {arr.at(-1).message.push(DATA.message.at(-1))} else {arr.push(DATA)}
        }
    }
});

export const {
    addProfile,
    editProfile,
    delProfile,
    addMessage
} = ProfileSlice.actions;
export const ProfileReducer = ProfileSlice.reducer;