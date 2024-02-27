const express = require('express');
const {getAllRecentChat} = require("../controllers/recentChat-controllers");

const router = express.Router();

router.get('/recents', getAllRecentChat);

module.exports = router;

