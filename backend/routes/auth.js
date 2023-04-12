// const mongoose = require('mongoose')
const express = require('express')
const User = require('../models/User')
const router = express.Router();
// const user = User
const { body, validationResult } = require('express-validator');

// creating a user at /api/auth//createUser
router.post('/createUser',[
    body('name','name is not defined').isLength({ min: 3 }),
    body('email').isEmail(),
    body('password').isLength({ min: 5 }),
] ,async (req, res) => { 
    // console.log(req.body)
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    try{
    // Checking wheather email already being registered
    let user = await User.findOne({email: req.body.email})
    if(user){
        return res.status(400).json({error:"bhaiii kia kr rha hy ye email pehle se hi registered hy naya email daalo ya mun utha kr purane waly se sign in kroo"})
    }
    // creating new user
     user = await Ufser.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        
      })
      console.log('usercreated')
      res.json(user)}catch(error){
        res.status(500).send("some error occured")
      }
})

module.exports = router ;