const express = require('express');
const router = express.Router();

const {
    getAllUsers,
    getUser,
    addUser,
    updateUser,
    deleteUser
} = require('../controllers/user-controllers');


router.get('/users', getAllUsers );

router.get('/users/:id', getUser );

router.post('/users', addUser );

router.patch('/users/:id', updateUser );

router.delete('/users/:id', deleteUser );


module.exports = router;