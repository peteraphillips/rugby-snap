const mongoose = require('mongoose')

const cardSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    nationality: {
        type: String,
        required: true
    },
    flag: {
        type: String,
        required: true
    },
    imgUrl: {
        type: String,
        required: true
    },
    quality: {
        type: String,
        required: true
    },
})

cardSchema.set('toJson', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('Card', cardSchema)