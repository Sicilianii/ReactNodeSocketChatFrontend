import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const initialState = {
    status: 'idle',
    entities: []
};

const recentChatSlice = createSlice({
    name: 'recent',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getAllRecentChatAPI.pending, (state, action) => {
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