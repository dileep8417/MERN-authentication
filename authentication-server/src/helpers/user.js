exports.createUserSession = (req, res, user) => {
    req.session.userId = user.toString();
    const cookieOptions = {
        httpOnly: true,
        maxAge: 48 * 60 * 60 * 1000, // 2 days in milliseconds
    };
    res.cookie('l', req.session.userId, cookieOptions);
}