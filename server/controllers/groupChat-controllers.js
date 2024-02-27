const GroupChat = require('../models/groupChats');

const handleError = (res, err) => { res.status(500).json( {error: `${err}`} )}

const getAllGroupChats = (req, res) => {
    GroupChat.find()
        .then( (group) => {
            res.status(200).json(group);
        } )
        .catch( (err) => handleError(res, err) )
}

module.exports = {
    getAllGroupChats
};