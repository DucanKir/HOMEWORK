const User = require('../models/User')
const jwt = require('jsonwebtoken')
const {secret} = require('../config/environment')

function registerRoute(req, res) {
  User.create(req.body)
    .then(user => res.json(user))
    .catch(err => res.status(422).json(err))
}

function liginRoute(req, res) {
  User.findOne({email: req.body.email})
    .then(user => {
      if(!user || !user.validatePassword(req.body.password)) {
        return res.sendStatus(401)
      }
      const token = jwt.sign({sub: user._id}, secret, {expiresIn: '6h'})

      res.json({message: `Wellcome back ${user.username}!`, token })
    })
}

module.exports = {
  register: registerRoute,
  login: liginRoute
}
