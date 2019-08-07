const router = require('express').Router()
const stationsController = require('../controllers/books')
const authController = require('../controllers/auth')
const secureRoute = require('../lib/secureRoute')

router.get('/', (req, res) => {
  res.json({ message: 'Hello World'})
})

router.route('/books')
  .get(stationsController.index)
  .post(secureRoute, stationsController.create)

router.route('/books/:id')
  .get(stationsController.show)
  .put(secureRoute, stationsController.update)
  .delete(secureRoute, stationsController.delete)

router.post('/register', authController.register)
router.post('/login', authController.login)



module.exports = router
