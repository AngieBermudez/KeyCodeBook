const mongoose = require('mongoose')
const { model } = require('./user')

const genreSchema = new mongoose.Schema({
    name: {type: String, required: true},
    status: { type: Boolean, required: true}
    /**
     * Campos Boleanos
     * 1 => false
     * 0 => true
     */
})

module.exports = mongoose.model('Genre', genreSchema)