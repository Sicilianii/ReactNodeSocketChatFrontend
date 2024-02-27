const RecentChat = require('../models/recentChats');

const handleError = (res, err) => { res.status(500).json( {error: `${err}`} )}



const createRecentChat = (req, res) => {}

const getAllRecentChat = (req, res) => {
    RecentChat.find().then( (chat) => {
        res.status(200).json(chat);
    }).catch( (err) => handleError(res, err) )
}

const getRecentChat = (req, res) => {
    RecentChat.findById(req.params.id).then( (chat) => {
        res.status(200).json(chat);
    } ).catch( (err) => handleError(res, err) )
}

const pushRecentChat = (req, res) => {}

const delMessRecentChat = (req, res) => {}

const delRecentChat = (req, res) => {}

module.exports = {
    getAllRecentChat,
    createRecentChat,
    getRecentChat,
    pushRecentChat,
    delRecentChat,
    delMessRecentChat
};