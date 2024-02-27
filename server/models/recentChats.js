const mongoose = require('mongoose');


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
    body_chats: {
        type: String,
        require: true
    }
});

const RecentChat = mongoose.model('recentChat', recentChatSchema);

module.exports = RecentChat;
