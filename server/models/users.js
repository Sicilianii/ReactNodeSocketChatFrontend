const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const usersSchema = new Schema({
    id: {
        type: String,
        require: true
    },
    nameUser: {
        type: String,
        require: true
    },
    chats: {
        recentChats: [String],
        groupChats: [String]
    },
    friends: [String]
});

const User = mongoose.model('User', usersSchema);

module.exports = User;