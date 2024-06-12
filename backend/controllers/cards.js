const cardsRouter = require('express').Router()
const Card = require('../models/card')

cardsRouter.get('/', (request, response) => {
    Card.find({}).then(cards => {
        response.json(cards)
    })
})

module.exports = cardsRouter
