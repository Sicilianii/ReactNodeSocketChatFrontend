import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import { IRecentChat } from "../../../shareds/types";

interface InitialRecentChat {
    status: string,
    entities: IRecentChat[]
}

const initialState: InitialRecentChat = {
    status: 'idle',
    entities: []
};

const recentChatSlice = createSlice({
    name: 'recent',
    initialState,
    reducers: {
        logOutRecent: (state) => {
            state.entities = [];
            state.status = 'idle';
        }
    },
    extraReducers: builder => {
        builder.addCase(getAllRecentChatAPI.pending, (state) => {
            state.status = 'loading';
        });
        builder.addCase(getAllRecentChatAPI.fulfilled, (state, action) => {
            state.entities = [...action?.payload];
            state.status = 'idle';
        });
    }
});

export const getAllRecentChatAPI = createAsyncThunk('recent/getAllChats', async (userID) => {
    const result = await fetch(`/recents/${userID}`).then(res => res.json()).catch( err => {console.log(err)})
    return result;
});

export const RecentChatReducer = recentChatSlice.reducer;
export const {logOutRecent} = recentChatSlice.actions