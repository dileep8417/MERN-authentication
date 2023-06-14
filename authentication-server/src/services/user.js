const { isValidToken } = require('../helpers/utils');
const UserModel = require('../models/user');
const bcrypt = require('bcrypt');

exports.createUser = async (formData, response) => {
    const user = new UserModel();
    response.errorMsg = '';

    // Checks any existing user with same mail exists
    const existingUser = await UserModel.findOne({ 'email': formData.email }, {'_id': true});
    if (existingUser) {
        response.errorType = 'EMAIL_EXIST';
        response.errorMsg = 'Email Id already exist';
        return;
    }

    user.firstName = formData.firstName;

    if (formData.lastName) {
        user.lastName = formData.lastName;
    }

    user.mobile = formData.mobile;
    user.countryCode = formData.countryCode;
    user.email = formData.email;

    let password;
    try {
        password = await bcrypt.hash(formData.password, 10);
    } catch (e) {
        password = null;
    }

    if (!password) {
        response.errorMsg = 'Something went wrong';
        return;
    }

    user.password = password;
    user.save();
}

exports.getUserIdIfExist = async (email, password) => {
    const user = await UserModel.findOne({'email': email}, {'password': true});
    if (!user) {
        return null;
    }
    try {
        const result = await bcrypt.compare(password, user.password);
        if (!result) {
            return null;
        }
    } catch (e) {
        return null;
    }

    return user._id;
}

exports.isUserExist = async (token) => {
    if (!isValidToken(token)) {
        return false;
    }
    const userId = await UserModel.findOne({'_id': token}, {'_id': true});
    return userId !== null;
}