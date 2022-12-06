// Modules and Globals
require('dotenv').config()
const express = require('express')
const app = express()
const router = require("./controllers/places")
const methodOverride = require('method-override')
const mongoose = require('mongoose')
const PORT = process.env.PORT

// Express Settings
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))



// Controllers & Routes
app.use('/places', router)

app.get('/', (req, res) => {
    res.render('home')
})

app.get('*', (req, res) => {
    res.render('error404')
})

// Listen for Connections
// app.listen(PORT. () => console.log(`server is running in port ${PORT}`))

module.exports= app;