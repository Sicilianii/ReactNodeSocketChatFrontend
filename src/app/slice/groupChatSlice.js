import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const initialState = {
    status: 'idle',
    entities: []
};

const groupChatSlice = createSlice({
    name: 'group',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getAllGroupChatAPI.pending, (state, action) => {
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