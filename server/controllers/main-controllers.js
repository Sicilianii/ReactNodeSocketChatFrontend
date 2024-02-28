const Chats = require('../models/chat');
const RecentChat = require('../models/recentChats');
const GroupChat = require('../models/groupChats');
const User = require("../models/users");

const handleError = (res, err) => { res.status(500).json( {error: `${err}`} )}


const getFullInfo = (req, res) => {
    User.findById(req.query.id).then( (user) => {
        let DATA = user;
        const recent = RecentChat.find({ '_id': { $in: user.chats.recentChats } })
        const groupe = GroupChat.find({ '_id': { $in: user.chats.groupChats } })
        DATA.chats.recentChats = recent;
        DATA.chats.groupChats = groupe;
        res.status(200).json(DATA);
    }).catch( (err) => handleError(res, err) )
}

module.exports = {
    getFullInfo
};