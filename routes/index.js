const express = require('express')
const router = express.Router()

const LineBotController = require('../controllers/LineBot')
// const {todoLists} = require('../controllers/Todo');

router.post('/callback', LineBotController.callLineBot);
// router.get('/', todoLists);

module.exports = router;
