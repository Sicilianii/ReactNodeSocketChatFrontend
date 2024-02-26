const User = require("../models/users");

const handleError = (res, err) => { res.status(500).json( {error: `${err}`} )}

const getAllUsers = (req, res) => {
    User.find().then( (user) => {
        res.status(200).json(user);
    }).catch( (err) => handleError(res, err) )
}

const getUser = (req, res) => {
    User.findById(req.params.id).then( (user) => {
        res.status(200).json(user);
    }).catch( (err) => handleError(res, err) )
}

const addUser = (req, res) => {
    const user = new User(req.body);
    user.save().then( (result) => {
        res.status(200).json(result);
    }).catch( (err) => handleError(res, err) )
}

const updateUser = (req, res) => {
    User.findOneAndUpdate(req.params.id, req.body).then( (result) => {
        res.status(200).json(result);
    }).catch( (err) => handleError(res, err) )
}


const deleteUser = (req, res) => {
    User.findByIdAndDelete(req.params.id).then( (result) => {
        res.status(200).json(result);
    }).catch( (err) => handleError(res, err) )
}


module.exports = {
    getAllUsers,
    getUser,
    addUser,
    updateUser,
    deleteUser
};