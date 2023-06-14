const router = require('express').Router();
const { getUserDetails } = require('../controllers/user');
const { isUserLoggedin } = require('../middlewares/auth');

router.use(isUserLoggedin);

router.get('/details', getUserDetails);

router.get('/isAuthenticated', (req, res) => {
    res.json({isLoggedin: req.isLoggedin});
})

module.exports = router;