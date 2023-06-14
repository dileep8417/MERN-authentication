const UserModel = require('../models/user');

exports.getUserDetails = async (req, res) => {
    const response = {};
    response.isLoggedin = req.isLoggedin;

    if (!req.isLoggedin) {
        res.json(response);
        return;
    }

    const user = await UserModel.findOne({'_id': req.session.userId});
    response.name = user.firstName

    res.json(response);
}