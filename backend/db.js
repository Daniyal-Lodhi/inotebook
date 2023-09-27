const mongoose = require('mongoose');
var uri = "mongodb+srv://daniyallodhi25:daniyal123@cluster0.eczrsa5.mongodb.net/"
const connectToMongo = async()=>{
        mongoose.connect(uri)
        console.log("connected to mongo successfully")
 
}
module.exports = connectToMongo;           