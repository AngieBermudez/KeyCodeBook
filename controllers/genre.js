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
        (datagenre) => {    // Esto es un colback
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
/**
 * Metodo para modificar generos
 * @param {*} req 
 * @param {*} res 
 */
exports.update = (req, res) => {
    if(Object.entries(req.body).length == 0) {
        return res.status(400).send({
            message: 'Todos los campos son obligatorios'
        })
    }

    const genre = {
        name: req.body.name,
        status: req.body.status
    }

    GenreModel.findByIdAndUpdate(req.params.id, genre, {new: true})
    .then(
        (genreUpdate) => {
            res.send(genreUpdate)
        }
    )
    .catch(
        (error) => {
            return res.status(500).send({
                message: error.message
            })
        }
    )

}