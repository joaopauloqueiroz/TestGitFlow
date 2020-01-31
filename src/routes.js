const routes = require('express').Router()
const UserController = require('./controllers/UserController')

routes.post('/user', UserController.store)

module.exports = routes