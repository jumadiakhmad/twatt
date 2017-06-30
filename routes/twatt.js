const express = require('express');
const router = express.Router();
const twatt = require('../controller/twattController');

router.get('/', twatt.timeline);
router.get('/search', twatt.search);
router.post('/tweet', twatt.postTweet);

module.exports = router;
