const router = require('express').Router();
const {loginUser, signupUser, logOutUser} = require('../controllers/userAuth');

router.post('/login', loginUser);

router.post('/signup', signupUser);

router.get('/logout', logOutUser);

module.exports = router;