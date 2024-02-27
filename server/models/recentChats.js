const mongoose = require('mongoose');
const {ObjectId} = require("mongodb");

const Schema = mongoose.Schema;
const recentChatSchema = new Schema({
    id: {
        type: String,
        require: true
    },
    users: [{
        type: String,
        require: true
    }],
    body_chats: [{
        author: {
            type: String,
            require: true
        },
        message: [{
            time_mess: String,
            body_mess: String
        }]
    }]
});

const RecentChat = mongoose.model('recentChat', recentChatSchema);
module.exports = RecentChat;
