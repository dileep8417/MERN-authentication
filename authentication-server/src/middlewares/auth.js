const { isUserExist } = require('../services/user');

exports.isUserLoggedin = async (req, res, next) => {
    req.isLoggedin = await validateUserSession(req);
    next();
}

const validateUserSession = async (req) => {
    if (!req.session.userId && !req.cookies.l) {
        return false;
    }
    // Checks user session is exist or not
    if (req.session.userId) {
        return true;
    }
    // Validate login cookie and create session from cookie
    const isValidLoginToken = await isUserExist(req.cookies.l);
    if (isValidLoginToken) {
        req.session.userId = req.cookies.l;
    }
    return isValidLoginToken;
}

exports.parseCookies = (req, res, next) => {
    req.cookies = {};
    const cookieString = req.headers.cookie;
    if (!cookieString) {
        next();
        return;
    }
    cookieString.split(';').forEach(cookie => {
        const cookieArr = cookie.split('=');
        req.cookies[cookieArr[0].trim()] = decodeURIComponent(cookieArr[1]);
    });
    next();
}