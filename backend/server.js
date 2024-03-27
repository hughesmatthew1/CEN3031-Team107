//dependencies -> npm i express mongoose
//npm i --save-dev dotenv nodemon
//make sure to download mongodb (compass) on your local machine
//set .env database url as the same one in your mongodb application using the following code
//DATABASE_URL = 'mongodb://localhost:27017/WakeNBake'

//npm run devStart to initialize
//nodemon server.js if above doesnt work in terminal to run server
require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//database url in dotenv file, feel free to change according to your machine
mongoose.connect(process.env.DATABASE_URL)

const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to database'))

app.use(express.json())

const menuRouter = require('./routes/menu')
const userRouter = require('./routes/user')

app.use('/menu', menuRouter)
app.use('/user', userRouter)

app.listen(3000, () => console.log("Server is running"))