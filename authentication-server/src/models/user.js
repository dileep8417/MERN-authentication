const mongoose = require('mongoose');
const { getCurrentDateTime } = require('../helpers/utils');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        default: null,
    },
    countryCode: {
        type: String,
        required: true,
    },
    mobile: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    createdAt: {
        type: String,
        default: getCurrentDateTime
    },
    lastUpdatedAt: {
        type: String,
        default: getCurrentDateTime
    }
});

userSchema.pre('save', function(next) {
    this.lastUpdatedAt = getCurrentDateTime;
    next();
});

const UserModel = mongoose.model('user', userSchema);

module.exports = UserModel;