const formValidation = require('../helpers/formValidation');
const { createUserSession } = require('../helpers/user');
const  { createUser, getUserIdIfExist } = require('../services/user');

const loginUser = async (req, res) => {
    const response = {};
    const formData = req.body;
    response.isLoggedin = false;

    formValidation.validateLoginForm(formData, response);
    if (Object.keys(response.validationErrors).length) {
        res.json(response);
        return;
    }

    const user = await getUserIdIfExist(formData.email, formData.password);
    if (user) {
        response.isLoggedin = true;
        createUserSession(req, res, user);
    } else {
        response.errorMsg = 'Invalid username or password'
    }
    
    res.json(response);
}

const signupUser = async (req, res) => {
    const response = {};
    const formData = req.body;
    response.success = true;

    // Validates form data
    formValidation.validateSignupForm(formData, response);
    if (Object.keys(response.validationErrors).length) {
        response.success = false;
        res.json(response);
        return;
    }

    await createUser(formData, response);
    if (response.errorMsg.length) {
        response.success = false;
    }

    res.json(response);
}

const logOutUser = (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.log(err);
        }
    });
    res.clearCookie('l', {path: '/'});
    res.sendStatus(200);
}

module.exports = {
    loginUser,
    signupUser,
    logOutUser
};