const express = require('express');
const router = express.Router();
const msgCtrl = require('../../controllers/api/chat');

router.post('/create', msgCtrl.newMessage),
router.get('/chatMsgs', msgCtrl.chatMsgs),

module.exports = router;