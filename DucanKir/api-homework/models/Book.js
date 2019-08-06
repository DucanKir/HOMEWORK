const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
  name: String,
  Author: String,
  yearPublished: Number
})


module.exports = mongoose.model('Book', bookSchema)
