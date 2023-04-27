const express = require('express');
const router = express.Router();
const chatCtrl = require('../../controllers/api/chat');

router.post('/create', chatCtrl.connectUsers)
router.post('/delete', chatCtrl.disconnectUsers)
router.get('/all', chatCtrl.findChat)

// router.post('/', usersCtrl.create);
// router.post('/login', usersCtrl.login);
// router.get('/check-token', ensureLoggedIn, usersCtrl.checkToken);
// router.get('/all', usersCtrl.allUsers);


module.exports = router;