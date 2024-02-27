const express = require('express');
const { join } = require('node:path');

const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(join(__dirname, '..', 'index.html'));
});

module.exports = router;