import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";


const initialState = {
    status: 'idle',
    entities: [],
};

// Thunk for users API
export const getAllUsersAPI = createAsyncThunk('users/getAllUsersFromAPI', async (userID) => {
    const result = await fetch(`/user/${userID}`).then( res => res.json() );
    return result;
});



const UserSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addProfile: (state, action) => { console.log( state, action ) },
    },
    extraReducers: builder => {
        builder.addCase(getAllUsersAPI.pending, (state, action) => {
            state.status = 'loading';
        });
        builder.addCase(getAllUsersAPI.fulfilled, (state, action) => {
            state.entities = [...action?.payload];
            state.status = 'idle';
        });
    }
});

export const {
    addProfile
} = UserSlice.actions;
export const UserReducer = UserSlice.reducer;