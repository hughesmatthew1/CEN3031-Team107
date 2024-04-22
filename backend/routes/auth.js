const express = require('express')
const router = express.Router()
const User = require('../models/users')
const checkAuth = require("../middleware/checkAuth")

router.get("/", checkAuth, async (req, res) => {
    // Return active user if yes
    try{
        let username = req.user

        const existingUser = await User.findOne({ username });
        // Verify Username is not taken
        if (!existingUser) {
            return res.status(400).json({message: "User does not exist"})
        }
        else {
            return res.status(201).json({username: existingUser.username, password: existingUser.password, rewardPoints: existingUser.rewardPoints, id: existingUser.id});
        }
    } catch(err){
        res.status(400).json({ message: "Something is wrong" })
    }
})


module.exports = router