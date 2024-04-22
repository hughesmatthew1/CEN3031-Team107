const express = require('express')
const router = express.Router()
const Topping = require('../models/toppings')

//getting all toppings
router.get('/', async (req,res) => {
    try {
        const toppings = await Topping.find()
        res.json(toppings)
    }catch(err) {
        res.status(500).json({message : err.message})
    }
})

//creating one topping
router.post('/', async (req, res) => {
    const { name, price, rewardPointsCOST, rewardPointsADD} = req.body;
    
    try {
        const existingTopping = await Topping.findOne({ name });
        if (existingTopping) {
            return res.status(400).json({ message: 'Topping already exists' });
        }
        const topping = new Topping({
            name,
            price,
            rewardPointsCOST,
            rewardPointsADD,
        });
        
      const newTopping = await topping.save();
      res.status(201).json(newTopping);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });


//getting one topping
router.get('/:id', getTopping, (req,res) => {
    res.json(res.topping)
})


//deleting a topping
router.delete('/:id', getTopping, async (req, res) => {
    try{
        await res.topping.deleteOne()
        res.json({ message : 'Deleted Topping'})
    }catch (err) {
        return res.status(500).json({message: err.message})
    }
})

//get topping function to find by ID
async function getTopping(req, res, next){
    let topping
    try{
        topping = await Topping.findById(req.params.id)
        if(topping == null){
            return res.status(404).json({message : 'Topping cannot be found'})
        }
    }catch(err){
        return res.status(500).json({message: err.message})
    }

    res.topping = topping
    next()
}

module.exports = router