import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    users: [
        {
            id: '#00001',
            name: 'Mike',
            chats: {
                workChat: ['$00001'],
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
        recentChats: [

        ],
        groupChats: [
            {
                id_chats: '$00001',
                users: ['#00001','#00002','#00003'],
                body_chats: [
                    {
                        time_mess: '18:20:10 GTM+3',
                        author: '#00002',
                        body_mess: 'Hello guys!'
                    },
                ]
            }
        ]
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