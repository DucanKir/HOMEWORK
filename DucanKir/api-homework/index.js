const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const router = require('./config/routes')

const app = express()

mongoose.connect('mongodb://localhost:27017/books-db')

app.use(bodyParser.json())

app.use(router)

app.listen(4000, () => console.log('listening to 4000'))
