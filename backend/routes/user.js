const express = require('express')
const router = express.Router()
const User = require('../models/users')
const JWT = require('jsonwebtoken')

//getting all users
router.get('/', async (req,res) => {
    try {
        const users = await User.find()
        res.json(users)
    }catch(err) {
        res.status(500).json({message : err.message})
    }
})

//creating user
router.post('/', async (req, res) => {
    const { username, password, rewardPoints} = req.body;
    
    try {
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: 'Username is already taken' });
        }
        const user = new User({
            username,
            password,
            rewardPoints,
        });
        
        const newUser = await user.save();
        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
  });

// Signup route

router.post('/signup', async (req,res)=>{
    const { username, password} = req.body;

    try{
        const existingUser = await User.findOne({ username });
        // Verify Username is not taken
        if (existingUser) {
            return res.status(400).json({ message: 'Username is already taken' });
        }
        if (password.length < 8){
            return res.status(400).json({ message: "Password too short"})
        }
        // Creates new user object
        const user = new User({
            username,
            password,
        });
        // Saves user object to database
        const newUser = await user.save();
        // Creates a token
        const token = await JWT.sign({username}, "a", {expiresIn: 360000})
        // Returns token
        res.json({token})
        
    } catch(err){
        res.status(400).json({ message: err.message })
    }

})

// Login route

router.post('/login', async (req,res)=>{
    const { username, password, rewardPoints} = req.body;
    
    try {
        const existingUser = await User.findOne({ username });
        // Verify user exists
        if (!existingUser) {
            return res.status(400).json({ message: 'User does not exist.' });
        }
        // Validate password
        if(password != existingUser.password){
            return res.status(400).json({ message: "Incorrect password." })
        }

        // Creates a token
        const token = await JWT.sign({ username }, "a", { expiresIn: 360000 })
        // Returns token
        res.json({token})    

    } catch (err) {
        res.status(400).json({ message: err.message });
    }

});

//getting one user by id
router.get('/:id', getUser, (req,res) => {
    res.json(res.user)
})

//deleting a user
router.delete('/:id', getUser, async (req, res) => {
    try{
        await res.user.deleteOne()
        res.json({ message : 'Deleted User'})
    }catch (err) {
        return res.status(500).json({message: err.message})
    }
})

//updating user reward points
router.patch('/:id', getUser, async (req, res) => {
    try {
        if (req.body.rewardPoints != null) {
            res.user.rewardPoints = req.body.rewardPoints;
        }
        const updatedUser = await res.user.save();
        res.json(updatedUser);
        //updating user is as follows
        //review route.rest for instance
        //PATCH http://localhost:3000/user/6604e55f2a65488c5ea19c99
        //Content-Type: application/json
        //{
            //"rewardPoints": 1000
        //}
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});


async function getUser(req, res, next){
    let user
    try{
        user = await User.findById(req.params.id)
        if(user == null){
            return res.status(404).json({message : 'Item cannot be found'})
        }
    }catch(err){
        return res.status(500).json({message: err.message})
    }

    res.user = user
    next()
}

module.exports = router