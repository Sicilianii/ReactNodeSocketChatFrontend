import {createSlice} from "@reduxjs/toolkit";
import {getChats} from "../../shared/lib/helpers/GetChats";
import {getAllUsers} from "../../functionsAPI/requestAPI";


const initialState = {
    users: getAllUsers('65dd9ad63a31f02dbde4ab58'),
    chats: {
        // Chats for max-2 users
        recentChats: [
            {
                id_chats: '@_0001',
                users: ['#00001','#00002'], // max 2 users
                body_chats: [
                    {
                        author: '#00002',
                        message: [
                            {
                                time_mess: '12:20',
                                body_mess: 'Hello, moppets'
                            }
                        ]
                    },
                ]
            },
            {
                id_chats: '@_0002',
                users: ['#00003','#00002'], // max 2 users
                body_chats: [
                    {
                        author: '#00002',
                        message: [
                            {
                                time_mess: '12:20',
                                body_mess: 'Hello, poppets'
                            }
                        ]
                    },
                ]
            }
        ],
        // WorkChats and Groupe chats (min 3 users)
        groupChats: [
            {
                id_chats: '65ddd5d256788dcf4a6a9d06',
                nameChat: 'Work',
                users: ['#00001','#00002','#00003'], // min 3 users
                body_chats: [
                    {
                        author: '#00002',
                        message: [
                            {
                                time_mess: '12:20',
                                body_mess: 'Hello, guys'
                            }
                        ]
                    },
                    {
                        author: '#00001',
                        message: [
                            {
                                time_mess: '12:20',
                                body_mess: 'Hello, John'
                            }
                        ]
                    },
                    {
                        author: '#00003',
                        message: [
                            {
                                time_mess: '12:20',
                                body_mess: 'Hi'
                            }
                        ]
                    },
                ]
            },
            {
                id_chats: '65ddd5d256788dcf4a6a9d07',
                nameChat: 'Home',
                users: ['#00001','#00002','#00003'], // min 3 users
                body_chats: [
                    {
                        author: '#00002',
                        message: [
                            {
                                time_mess: '12:20',
                                body_mess: 'Hello, guys'
                            },
                            {
                                time_mess: '12:20',
                                body_mess: 'Hello, guys'
                            },
                            {
                                time_mess: '12:20',
                                body_mess: 'Hello, guys'
                            }
                        ]
                    },
                    {
                        author: '#00001',
                        message: [
                            {
                                time_mess: '12:20',
                                body_mess: 'Hello'
                            }
                        ]
                    },
                    {
                        author: '#00003',
                        message: [
                            {
                                time_mess: '12:20',
                                body_mess: 'Hi'
                            }
                        ]
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