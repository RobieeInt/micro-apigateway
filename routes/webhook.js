const express = require('express');
const { route } = require('.');
const router = express.Router();

const webhookHandler = require('./handler/webhook');
const verifyToken = require('../middlewares/verifyToken');



router.post('/', webhookHandler.webhook);



module.exports = router;