const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()

mongoose.connect('mongodb://localhost:27017/books-db')

app.use(bodyParser.json())

app.get('/', (req, res) => {
  // res.end('hello World')
  // res.send('<h1>Hello World</h1>')
  res.json({message: 'hello world' })
})

const bookSchema = new mongoose.Schema({
  name: String,
  author: String
})

const Book = mongoose.model('Book', bookSchema)

app.get('/books', (req, res) => {
  Book.find()
    .then(books => res.json(books)) //send as JSOn
})

app.get('/books/:id', (req, res) => {
  Book.findById(req.params.id)
    .then(book => res.json(book)) //send as JSOn
})


app.delete('/books/:id', (req, res) => {
  Book.findByIdAndDelete(req.params.id)
    .then(book => res.json(book))
})

app.put('/books/:id', (req, res) => {
  Book.findByIdAndUpdate(req.params.id, req.body)
    .then(book => res.json(book))
})

app.post('/books', (req, res) => {
  const book = new Book(req.body)

  book.save()
    .then(book => res.status(201).json(book))
})

app.listen(4000, () => console.log('listening to 4000'))
