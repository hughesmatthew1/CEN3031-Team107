const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
    const token = req.header('x-auth-token')

    // Verify the request contains a token
    if(!token){
        res.status(401).json({ message: "No token found"})
    }
    // Verify the token is valid
    try {
        const user = await jwt.verify(token, "a")
        req.user = user.username
        next()
    } catch (error) {
        res.status(400).json({ message: "Invalid Token" })
    }
}