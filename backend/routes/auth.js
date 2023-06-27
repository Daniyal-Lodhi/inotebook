const express = require('express');
const User = require('../models/User')
const router = express.Router();
// var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var fetchUser = require('../middleware/fetchuser');
const { body, validationResult } = require('express-validator');
const JWT_SECRET = "myNameIsDaniyalLodhi!!"



// ROUTE 1: Creating user using  /api/auth/createUser  , No login requred
router.post('/createUser',[
    body('name','name is not defined').isLength({ min: 3 }),
    body('email').isEmail(),
    body('password').isLength({ min: 5 }),  
] ,
  async (req, res) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    var success = false;
    if (!errors.isEmpty()) {
      
      return res.status(400).json({ success,errors: errors.array() });
    }
    try{
      // var salt = await bcrypt.genSaltSync(10); 
      // const hashedPass = await bcrypt.hash(req.body.password, salt )
    let user = await User.findOne({email:req.body.email})
    if(user){
        return res.status(400).json({error:"Email already registered"})  
        }
        user = await User.create({  
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
          })
    console.log("User Created")
    let data = {
      user:{
        id : user.id
      }
    }
    var authToken = jwt.sign(data, JWT_SECRET);
    success = true ;
    res.json({success,authToken})
  }  catch(error){
    res.status(500).json("internal server error")
  }}
);

// ROUTE 2 :(login) using  /api/auth/createUser  , No login requred

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
      var success = false
      let user = await User.findOne({email})
      if(!user){
        res.status(404).send({success,error:"please login with correct credentials"})
      }
      // const passCompare = await bcrypt.compare(password,user.password)

      if(password!== user.password){
        res.status(404).send({success,error:"please login with correct credentials"})
      }
      let data = {
        user:{
          id : user.id
        }
      }
      var authToken = jwt.sign(data, JWT_SECRET);
      success = true
      res.json({success,authToken})
    }catch(error){
      success = false
      res.status(500).json(success,"internal server error")
    }
})

// ROUTE 3 :geting loggedin user details  using  /api/auth/getuser  , login requred

router.post('/getuser',fetchUser ,

async (req, res) => {
try {
  let userId = req.user.id 
   let user = await User.findById(userId).select("-password") /* "-password"so password should not be provided in details*/
   res.send(user)
} catch (error) {
  es.status(500).json("internal server error")
}})
module.exports = router
