const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const router = require('./config/routes')
const queryHandler = require('./lib/queryHandler')
const {dbURI} = require('./config/environment')

const app = express()

mongoose.connect(dbURI, {useNewUrlParser: true })

app.use(bodyParser.json())

app.use(queryHandler)

app.use(router)

app.listen(4000, () => console.log('listening to 4000'))
