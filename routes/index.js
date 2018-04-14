var express = require('express');
var router = express.Router();

const LineBotController = require('../controllers/LineBot');

router.post('/callback', LineBotController.callLineBot);

module.exports = router;
