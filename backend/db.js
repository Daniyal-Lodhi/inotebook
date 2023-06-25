const mongoose = require('mongoose');
const URI = 'mongodb+srv://daniyallodhi25:daniyal123@cluster0.eczrsa5.mongodb.net/'

const connectToMongo = async()=>{
        mongoose.connect(URI)
        console.log("connected to mongo successfully")

}
module.exports = connectToMongo;  