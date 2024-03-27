const express = require('express')
const router = express.Router()
const MenuItem = require('../models/menuitems')

//getting all menu items
router.get('/', async (req,res) => {
    try {
        const menuitems = await MenuItem.find()
        res.json(menuitems)
    }catch{
        res.status(500).json({message : err.message})
    }
})

//creating menu item
router.post('/', async (req, res) => {
    const { name, description, price, image, macronutrients, allergens, rewardsPointsCOST, rewardsPointsADD } = req.body;
    
    const { calories, fats, carbs, protein } = macronutrients;

    try {
      const menuItem = new MenuItem({
        name,
        description,
        price,
        image,
        macronutrients: { calories, fats, carbs, protein },
        allergens,
        rewardsPointsCOST,
        rewardsPointsADD
      });
  
      const newMenuItem = await menuItem.save();
      res.status(201).json(newMenuItem);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });


//getting one menu item
router.get('/:id', getMenuItem, (req,res) => {
    res.json(res.item)
})


//deleting a menu item
router.delete('/:id', getMenuItem, async (req, res) => {
    try{
        await res.item.deleteOne()
        res.json({ message : 'Deleted Menu Item'})
    }catch (err) {
        return res.status(500).json({message: err.message})
    }
})


async function getMenuItem(req, res, next){
    let item
    try{
        item = await MenuItem.findById(req.params.id)
        if(item == null){
            return res.status(404).json({message : 'Item cannot be found'})
        }
    }catch(err){
        return res.status(500).json({message: err.message})
    }

    res.item = item
    next()
}

module.exports = router