const express = require('express')
const router = express.Router()

const LineBotController = require('../controllers/LineBot')

router.post('/callback', LineBotController.callLineBot);

module.exports = router;
