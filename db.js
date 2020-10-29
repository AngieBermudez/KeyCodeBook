const mongoose = require('mongoose')   //Paquete que permite la comunicacion a nuestra base de datos

const conectDB = () => {
    /* METODO CONNECT EM MONGOOSE => PERMITE CONECTARME A UNA BASE DE DATOS
     tiene unas opciones que son:
    useNewUrlParser: Analizar la informacion que se le quiere enviar a mongoDB.
    useUniFiedTopology: Escuchar los llamados que hacemos a mongoDB y monitorea que es lo que pasa.*/
    mongoose.connect('',
     { useNewUrlParser: true, useUnifiedTopology: true }, (error) => {
        if(error){
            console.log('Error: ', error)
        }else{
            console.log('Nos conectamos a la DB.')
        }
    })
}
/**
 * module.exports
 * nos permite exportar una funcion para que pueda ser utilizada en otra parte de nuestro proyecto
 */
module.exports = { conectDB } 