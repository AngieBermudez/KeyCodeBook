const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstName: { type: String, require: true },
    lasName: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true },
    role: { type: String, require: true },
    birthDate: { type: Date },
    age: { type: Number }
})

module.exports = mongoose.model('user', userSchema)