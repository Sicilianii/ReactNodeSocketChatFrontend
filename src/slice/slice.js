import {createSlice} from "@reduxjs/toolkit";
import {getChats} from "../components/GetChats";

const initialState = {
    users: [
        {
            id: '#00001',
            name: 'Mike',
            chats: {
                userChats: [],
                workChat: ['$_0001'],
            },
            friends: ['#00002','#00003']
        },
        {
            id: '#00002',
            name: 'John',
            chats: [],
            friends: ['#00001','#00003'],
        },
        {
            id: '#00003',
            name: 'Luice',
            chats: [],
            friends: ['#00001','#00002'],
        }
    ],
    chats: {
        // Chats for max-2 users
        recentChats: [
            {
                id_chats: '@_0001',
                users: ['#00001','#00002'], // max 2 users
                body_chats: [
                    {
                        time_mess: '18:20:10 GTM+3',
                        author: '#00002',
                        body_mess: 'Hello popets!'
                    },
                ]
            },
            {
                id_chats: '@_0002',
                users: ['#00003','#00002'], // max 2 users
                body_chats: [
                    {
                        time_mess: '18:20:10 GTM+3',
                        author: '#00002',
                        body_mess: 'Hello popets!'
                    },
                ]
            }
        ],
        // WorkChats and Groupe chats (min 3 users)
        groupChats: [
            {
                id_chats: '$_0001',
                nameChat: 'Work',
                users: ['#00001','#00002','#00003'], // min 3 users
                body_chats: [
                    {
                        time_mess: '18:20:10 GTM+3',
                        author: '#00002',
                        body_mess: 'Hello guys!'
                    },
                    {
                        time_mess: '18:20:10 GTM+3',
                        author: '#00001',
                        body_mess: 'Hello, John'
                    },
                    {
                        time_mess: '18:20:10 GTM+3',
                        author: '#00003',
                        body_mess: 'Hi'
                    },
                ]
            },
            {
                id_chats: '$_0002',
                nameChat: 'Home',
                users: ['#00001','#00002','#00003'], // min 3 users
                body_chats: [
                    {
                        time_mess: '18:20:10 GTM+3',
                        author: '#00002',
                        body_mess: 'Hello'
                    },
                    {
                        time_mess: '18:20:10 GTM+3',
                        author: '#00001',
                        body_mess: 'Hello'
                    },
                    {
                        time_mess: '18:20:10 GTM+3',
                        author: '#00003',
                        body_mess: 'Hi'
                    },
                ]
            }
        ]
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
            let data = {
                time_mess: action.payload.time_mess,
                author: action.payload.author,
                body_mess: action.payload.body_mess
            }
            let arr = getChats(state.chats ,action.payload.id);
            return arr.push(data);
        }
    }
});

export const {addProfile, editProfile, delProfile, addMessage} = ProfileSlice.actions;
export const ProfileReducer = ProfileSlice.reducer;