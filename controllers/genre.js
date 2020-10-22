const GenreModel = require('../models/genre')

/**
 * Metodo para crear un nuevo genero
 * @param {*} req => Todo lo que estamos enviando.
 * @param {*} res => Respuesta que devolverá.
 */

exports.create = (req, res) => {
    if(Object.entries(req.body).length == 0) {
        return res.status(400).send({
            message: 'Todos los campos son obligatorios'
        })
    }
    
    const genre = new GenreModel({
        name: req.body.name,
        status: req.body.status,
    })

    genre.save()
    .then(
        (datagenre) => {
            res.send(datagenre)
        }
    ).catch(
        (error) => {
            return res.status(500).send({
                message: error.message
            })
        }
    )
}