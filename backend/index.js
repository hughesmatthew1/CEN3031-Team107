//dependencies -> npm i express mongoose
//npm i --save-dev dotenv nodemon
//ignore this file, working in server.js
const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

const PORT = 4000;
app.listen(PORT, ()=>{
    console.log("Server running on port ${PORT}.")
})