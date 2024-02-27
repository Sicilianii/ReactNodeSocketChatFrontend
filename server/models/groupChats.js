const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const groupChatSchema = new Schema({
    id: {
        type: String,
        require: true
    },
    id_chats: String,
    nameChat: String,
    users: [{
        type: String,
        require: true
    }],
    body_chats: {
        type: String,
        require: true
    }
});

const GroupChat = mongoose.model('recentChat', groupChatSchema);

module.exports = GroupChat;