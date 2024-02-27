const express = require('express');
const { join } = require('node:path');
const { getAllChats } = require('../controllers/main-controllers');

const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(join(__dirname, '..', 'index.html'));
});

router.get('/chats', getAllChats);

module.exports = router;