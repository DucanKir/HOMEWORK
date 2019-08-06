const router = require('express').Router()
const stationsController = require('../controllers/books')

//app.get('/') - define a GET request handler for the home page: express
router.get('/', (req, res) => {
  //send back a JSON response: express
  res.json({ message: 'Hello World'})
})

// stationsINDEX route handler: express
router.route('/books')
  .get(stationsController.index)
  .post(stationsController.create)

router.route('/books/:id')
  .get(stationsController.show)
  .put(stationsController.update)
  .delete(stationsController.delete)


module.exports = router
