const express = require('express');
const router = express.Router();
const msgCtrl = require('../../controllers/api/messages');

router.post('/create', msgCtrl.newMessage),
router.get('/chatMsgs:/id', msgCtrl.chatMsgs),

module.exports = router;