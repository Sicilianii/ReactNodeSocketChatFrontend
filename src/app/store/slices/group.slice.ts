import {AsyncThunk, createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IGroupChat} from "../../../shareds/types";
import {logOutProfile} from "./profile.slice";

interface InitialGroupChat {
    status: string,
    entities: IGroupChat[]
}

const initialState: InitialGroupChat = {
    status: 'idle',
    entities: []
};

const groupChatSlice = createSlice({
    name: 'group',
    initialState,
    reducers: {
        logOutGroup: (state) => {
            state.entities = [];
            state.status = 'idle';
        }
    },
    extraReducers: builder => {
        builder.addCase(getAllGroupChatAPI.pending, (state) => {
            state.status = 'loading';
        });
        builder.addCase(getAllGroupChatAPI.fulfilled, (state, action) => {
            state.entities = [...action?.payload];
            state.status = 'idle';
        });
    }
});

export const getAllGroupChatAPI = createAsyncThunk('group/getAllChats', async (userID) => {
    const result = await fetch(`/groups/${userID}`).then(res => res.json()).catch( err => {console.log(err)});
    return result;
});

export const GroupChatReducer = groupChatSlice.reducer;

export const {logOutGroup} = groupChatSlice.actions