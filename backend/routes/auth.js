const express = require('express');
const User = require('../models/User')
const router = express.Router();
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');


const { body, validationResult } = require('express-validator');
const JWT_SECRET = "myNameIsDaniyalLodhi!!"
/* (/createUser)--> /api/auth k bad ye path hoga like /api/auth/createUser  , No login requred*/
router.post('/createUser',[
    body('name','name is not defined').isLength({ min: 3 }),
    body('email').isEmail(),
    body('password').isLength({ min: 5 }),
] ,
  async (req, res) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try{
      var salt = await bcrypt.genSaltSync(10);
      const hashedPass = await bcrypt.hash(req.body.password, salt )
    let user = await User.findOne({email:req.body.email})
    if(user){
        return res.status(400).json({error:"Email already registered"})  
        }
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: hashedPass,
          })
    console.log("User Created")
    let data = {
      user:{
        id : user.id
      }
    }
    var authToken = jwt.sign(data, JWT_SECRET);
    res.json({authToken})
  }catch(error){
    res.status(500).json("error")
  }}
);

/* (/login)--> /api/auth k bad ye path hoga like /api/auth/createUser  , No login requred*/

router.post('/login',[
  body('email').isEmail(),
  body('password').notEmpty()
  
] ,

async (req, res) => {
  const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    let {email,password} = req.body

    try{
      let user = await User.findOne({email})
      if(!user){
        res.status('404').send({error:"please login with correct credentials"})
      }
      const passCompare = await bcrypt.compare(password,user.password)
      if(!passCompare){
        res.status('404').send({error:"please login with correct credentials"})
      }
      let data = {
        user:{
          id : user.id
        }
      }
      var authToken = jwt.sign(data, JWT_SECRET);
      res.json({authToken})
    }catch(error){
      res.status(500).json("error")
    }
})
module.exports = router