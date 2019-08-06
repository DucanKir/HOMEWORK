const Book = require('../models/Book')

function indexRoute(req, res) {

  req.query.name = new RegExp(req.query.name, 'i')

  Book.find(req.query)
    .then(books => res.json(books))
}

function createRoute(req, res) {
  const book = new Book(req.body)

  book.save()
    .then(book => res.status(201).json(book))
}

function showRoute (req, res) {
  Book.findById(req.params.id)
    .then(book => {
      if(!book) return res.sendStatus(404)

      return res.json(book)
    })
}


function updateRoute (req, res) {
  Book.findById(req.params.id)
    .then(book => {
      if(!book) return res.sendStatus(404)
      return book.set(req.body)
    })
    .then(book => book.save())
    .then(book => res.json(book))
}
function deleteRoute (req, res) {
  Book.findById(req.params.id)
    .then(book => {
      if(!book) return res.sendStatus(404)

      return book.remove()
        .then(() => res.sendStatus(204))
    })
}

module.exports = {
  index: indexRoute,
  create: createRoute,
  show: showRoute,
  delete: deleteRoute,
  update: updateRoute
}
