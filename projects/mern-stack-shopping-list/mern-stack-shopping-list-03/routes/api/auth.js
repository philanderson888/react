const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');
const auth = require ('../../middleware/auth');

// Item model
const User = require('../../models/User')

// @route POST api/auth
// @desc log in a user
// @access Public
router.post('/',(req,res) => {
    const { email, password } = req.body;
    // validation
    if(!email || !password) {
        return res.status(400).json({msg: 'Please enter all fields'});
    } 
    // check for existing user
    User.findOne({email})
        .then(user => {
            // user check
            if(!user) return res.status(400).json({msg: 'User does not exist'})
            // password check comparing our (password) with database existing (user.password)
            // note that bcrypt will do the technical part of the hashing/salting etc
            bcrypt.compare(password,user.password)
                .then (isMatch => {
                    // isMatch is false
                    if(!isMatch) return res.status(400).json({ msg:'Invalid credentials' });
                    // isMatch is true 
                    jwt.sign({id:user.id},config.get('jwtSecret'),{expiresIn:3600},(err,token)=>{
                        if(err) throw err;
                        res.json({
                            reqBody: req.body,
                            token,
                            user: {
                                id: user.id,
                                name: user.name,
                                email: user.email,
                                password: user.password
                            }
                        })
                    });
                })
        });
});
// @route GET api/auth/user
// @desc  GET user data 
// @access Private
// select a user minus the password
router.get('/user',auth,(req,res) => {
    User.findById(req.user.id)
        .select('-password')
        .then(user => res.json(user));
})
module.exports = router