const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.post('/', usersCtrl.create);
router.post('/login', usersCtrl.login);
router.get('/check-token', ensureLoggedIn, usersCtrl.checkToken);
router.get('/all', usersCtrl.allUsers);
router.get('/user/:id', usersCtrl.aUser);
router.post('/delete', usersCtrl.remove);
router.post('/update/rating/:id', usersCtrl.editRating);
router.post('/update/bio/:id', usersCtrl.editBio);


module.exports = router;