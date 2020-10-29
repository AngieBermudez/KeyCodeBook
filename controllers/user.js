const UserModel = require('../models/user')
const service = require('../services/index')

/**
 * METODO PARA ALMACENAR UN NUEVO USUARIO
 * @param {*} req => Todo lo que enviamos desde el Body (formulario)
 * @param {*} res => La respuesta que se devolvera 
 */
exports.create = (req, res) => {

     /**
     * Validamos que todos los campos del formulario  esten llenos.
     */        
    if(Object.entries(req.body).length == 0) {
        return res.status(400).send({
            message: 'Los datos son obligatorios'
        })
    }

    const user = new UserModel({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        role: req.body.role,
        birthDate: req.body.birthDate,
        age: req.body.age,
    })

    user.save()
    .then( () => { res.send(dataUser) } )
    .catch( (error) => { 
        res.status(500).send({
            message: error.message
        })
    })
}

/**
 * Metodo para actualizar un usuario.
 * @param {*} req => Todo lo que enviamos desde el body
 * @param {*} res => La respuesta que se devolvera
 */
exports.update = (req, res) => {
    
    /**
     * Validamos que todos los campos del formulario  esten llenos.
     */
    if(Object.entries(req.body).length == 0) {
        return res.status(400).send({
            message: 'Los datos son obligatorios'
        })
    }

    const user = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password : req.body.password,
        role: req.body.role,
        birthDate: req.body.birthDate,
        age: req.body.age
    }
    /**
     * findByIdAndUpdate => Metodo de mongoose que permite buscar por id y actualizar usario.
     * tiene los parametros:
     * - El id usuario. => req.params.id es el id que se envia por la url
     * - los datos nuevos
     */
    UserModel.findByIdAndUpdate(req.params.id, user, {new: true})
    .then(
        (userUpdate) => {
            res.send(userUpdate)
        }
    ).catch(
        (error) => {
            res.status(500).send({
                message: error.message
            })
        }
    )    
}

/**
 * Metodo para listar todos los usuarios que estan en la plataforma.
 * @param {*} req => Todo lo que se recibe.
 * @param {*} res => respuesta que se devuelve.
 */
exports.getAll = (req, res) => {
    UserModel.find()        
        .then((users) => {res.send(users) })
        .catch(
            (error) => {
                res.status(500).send({
                    message: error.message
                })
            }
        )

}
/**
 * Metodo para obtener un usuario por el id
 * @param {*} req => Todo lo que recibe
 * @param {*} res => Respuesta que se devuelve
 */
exports.getOne = (req, res) => {
    UserModel.findById(req.params.id)        
        .then((user) => { res.send(user) })
        .catch(
            (error) => {
                res.status(500).send({
                    message: error.message
                })
            }
        )

}
/**
 * Metodo para eliminar un usuario por el id
 * @param {*} req => Todo lo que se recibe
 * @param {*} res => Respuesta que se devuelve
 */
exports.deleteOne = (req, res) => {
    UserModel.findByIdAndRemove(req.params.id)
        .then((user) => { res.send(user) })
        .catch(
            (error) => {
                res.status(500).send({
                    message: error.message
                })
            }
        )
}
exports.login = (req, res) => {
    UserModel.findOne({email: req.body.email}, (error, dataUser) => {
       if(dataUser != null){
           if(dataUser.password == req.body.password){
               res.send({ token: service.createToken(dataUser) })
           }else{
               res.status(400).send({
                message: 'Los datos no coinciden'
               })
           }
       }else{
           res.status(400).send({
            message: 'Los datos no coinciden'
           })
       }
    })
}