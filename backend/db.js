const mongoose = require('mongoose');
const URI = 'mongodb://127.0.0.1:27017/mydatabase'
const connectToMongo = async () => {
        await mongoose.connect(URI)
        console.log("connected to mongo")

};

module.exports = connectToMongo;
