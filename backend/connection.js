const mongoose = require('mongoose');
async function connectMongoDB(url) {
    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to database');
    } catch (error) {
        console.error('Database connection error:', error);
    }
}

module.exports = {
    connectMongoDB,
};