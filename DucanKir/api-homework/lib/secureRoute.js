const jwt = require('jsonwebtoken')
const {secret} = require('../config/environment')

function secureRoute(req, res, next) {
  if(!req.headers.authorization || !req.headers.authorization.startsWith('Bearer')) {
    return res.sendStatus(401)
  }
  const token = req.headers.authorization.replace('Bearer ', '')
  jwt.verify(token, secret,(err) => {
    if(err) return res.sendStatus(401)
    next()
  })

}


module.exports = secureRoute
