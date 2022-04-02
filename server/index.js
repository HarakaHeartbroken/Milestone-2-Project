//Modules and Globals
require('dotenv').config()
const express = require('express')
const path = require('path')
const cors = require('cors')

const app = express()
app.use(cors())

//Express Settings
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')

// configure our server port
const port = process.env.PORT || 5000;

// app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

//Controllers & Routes
app.use('/lesson_view', require('./controllers/lessons'))


// GET /
app.get('/', (req, res) => {
    res.render('home')

})

app.get('*', (req, res) => {
    res.render('error404')
})

app.listen(process.env.PORT, function (){
    console.log("I LIVE AGAIN!")
})