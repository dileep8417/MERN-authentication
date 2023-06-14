const express = require('express');
const app = express();
require('dotenv').config();
require('./src/db').connectDB();
const cors = require('cors');
const session = require('express-session');
const { parseCookies } = require('./src/middlewares/auth');

// To enable CORS
app.use(cors({
    origin: process.env.REACT_URL || 'http://localhost:3000',
    credentials: true,
}));

// To parse cookies in request header
app.use(parseCookies);

// To parse POST/JSON data in request body
app.use(express.json());

// To maintain session variables
app.use(session({
    secret: process.env.SESSION_SECRET || 'auth-server',
    resave: false,
    saveUninitialized: false,
}));

// Authentication routes
const authRouter = require('./src/routes/auth');
app.use('/auth', authRouter);

// Logged-in user routes
const userRouter = require('./src/routes/user');
app.use('/user', userRouter);

const port = process.env.PORT || 3002;
app.listen(port, () => `Server running on port ${port}`);