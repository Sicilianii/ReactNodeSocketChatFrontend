import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    users: [
        {
            id: '#00001',
            name: 'Mike',
            chats: {
                workChat: '#W0001',
            },
            friends: ['#00002','#00003']
        },
        {
            id: '#00002',
            name: 'Mike',
            chats: [],
            friends: ['#00001','#00003'],
        },
        {
            id: '#00003',
            name: 'Mike',
            chats: [],
            friends: ['#00001','#00002'],
        }
    ],
    chats: {
        recentChats: {

        },
        groupChats: {

        }
    }
};

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