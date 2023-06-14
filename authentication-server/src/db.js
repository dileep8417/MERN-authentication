const mongoose = require('mongoose');

module.exports.connectDB = async () => {
    const dbURI = process.env.MONGODBURI || 'mongodb://127.0.0.1:27017/auth';
    try {
        await mongoose.connect(dbURI);
        console.log('Database Connected');
    } catch (e) {
        console.log(e)
    }
}