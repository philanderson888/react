const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');

// Item model
const User = require('../../models/User')
// @route GET api/users
// @desc Register new user
// @access Public
// note that / represents api/users as it's already been reached to this point
// sort by date descending 
router.get('/', (req, res) => {
    User.find()
        .sort({date:-1})
        .then(users => res.json(users))
})

// @route POST api/users
// @desc add a user
// @access Public
router.post('/',(req,res) => {
    const { name, email, password } = req.body;
    // validation

    if(!name || !email || !password) {
        return res.status(400).json({msg: 'Please enter all fields'});
    } 
    // check for existing user
    User.findOne({email})
        .then(user => {
            if(user) return res.status(400).json({msg: 'User already exists'})
            const newUser = new User({ name, email, password });
                    // create salt and hash
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err,hash) => {
                    if(err) throw err;
                    newUser.password = hash;
                    newUser.save()
                        .then(user=>{
                            jwt.sign({id:user.id},config.get('jwtSecret'),{expiresIn:3600},(err, token) =>{
                                if(err) throw err;
                                res.json({
                                    token,
                                    user: {
                                        id: user.id,
                                        name: user.name,
                                        email: user.email,
                                        password: user.password,
                                        register_date: user.register_date
                                    } 
                                })
                            });

                        });
                });
            });
        });
});

// @route DELETE api/items/:id
// @desc delete item
// @access Public
router.delete('/:id',(req,res) => {
    User.findByIdAndDelete(req.params.id)
        .then( () => res.json({success:true}))
        .catch(err => res.status(404).json({success:false}))
})

// @route PUT api/items/:id
// @desc update item
// @access Public
router.put('/:id',(req,res) => {
    const updatedUser = new User({
        _id:req.params.id,
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        register_date:req.body.date,
        __v:req.body.__v
    })
    User.findByIdAndUpdate(req.params.id,updatedItem)
        .then( () => res.json({success:true}))
        .catch(err => res.status(404).json({success:false}))
})
module.exports = router