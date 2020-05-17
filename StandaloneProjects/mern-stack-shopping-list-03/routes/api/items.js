const express = require('express')
const router = express.Router()
const auth = require('../../middleware/auth');

// Item model
const Item = require('../../models/Item')
// @route GET api/items
// @desc get all items
// @access Public
// note that / represents api/items as it's already been reached to this point
// sort by date descending 
router.get('/', (req, res) => {
    Item.find()
        .sort({date:-1})
        .then(items => res.json(items))
})


// @route POST api/items
// @desc add an item
// @access private
router.post('/',auth, (req,res) => {
    const newItem = new Item({
        name: req.body.name
    })
    newItem.save()
        .then(item => res.json(item))
})



// @route DELETE api/items/:id
// @desc delete item
// @access private
router.delete('/:id',auth,(req,res) => {
    Item.findByIdAndDelete(req.params.id)
        .then( () => res.json({success:true}))
        .catch(err => res.status(404).json({success:false}))
})



// @route PUT api/items/:id
// @desc update item
// @access Public
router.put('/:id',(req,res) => {
    const updatedItem = new Item({
        _id:req.params.id,
        name: req.body.name,
        date:req.body.date,
        __v:req.body.__v
    })
    Item.findByIdAndUpdate(req.params.id,updatedItem)
        .then( () => res.json({success:true}))
        .catch(err => res.status(404).json({success:false}))
})



module.exports = router