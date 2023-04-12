const mongoose = require('mongoose')
const express = require('express')
const User = require('../models/User')
const router = express.Router();
// const user = User
const { body, validationResult } = require('express-validator');

// creating a user
router.post('/',[
    body('name','name is not defined').isLength({ min: 3 }),
    body('email').isEmail(),
    body('password').isLength({ min: 5 }),
] ,(req, res) => { 
    // console.log(req.body)
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      }).then(user => res.json(user)).catch(error=>console.log(error))
})

module.exports = router ;