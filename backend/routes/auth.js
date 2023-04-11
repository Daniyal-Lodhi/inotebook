const express = require('express');
const mongoose = require('mongoose');
const User = require('../models/User');
const router = express.Router();
const user1 = User

//  CREATE A USER USING :POST "/api/auth". Doesn't require auth
const Schema = mongoose;
router.post('/',(req,res)=>{
    console.log(req.body)
    const user1 = User(req.body)
    user1.save() 
    res.send(req.body)

})
module.exports = router ;