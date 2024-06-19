const playersRouter = require('express').Router()
const Player = require('../models/player')

playersRouter.get('/', (request, response) => {
    Player.find({}).then(players => {
        response.json(players)
    })
})

module.exports = playersRouter

