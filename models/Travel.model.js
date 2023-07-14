const {Schema, model } = require('mongoose')

const TravelModel = new Schema({
    title: {
        type: String,
        require: true,
        trim: true,
        minlength: 3
    },
    image: {
        type: String,
        require: true,
        trim: true,
    },
    descr: {
        type: String,
        require: true,
        trim: true,
    },
})

module.exports = model('Travel', TravelModel)