const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    name: { type: String, required: true },  // Nombre del libro
    author: { type: String, required: true },  // Nombre del autor del libro
    pageNumber: { type: Number },  // Numero de paginas.
    publisher: { type: String, required: true }, // Editorial
    publicationDate: { type: Date }, // Fecha de publicacion
    //genre: { type: mongoose.Schema.Types.ObjectId, ref: 'Genre' } , // Un libro solo tiene un genero 
    genre: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Genre' }]  //Un libro puede  tener muchos generos
})

module.exports = mongoose.model('Book', bookSchema)