const express = require('express')  //ESTAMOS UTILIZANDO EXPRESS EN NUESTRO PROYECTO.
const cors = require('cors')
const bodyParser = require('body-parser')

const { conectDB } = require('./db')
const app = express()   //SE CONVIERTE LA VARIABLE EXPRESS EN UN OBJETO, POR EL CULA VAMOS A PODER TRABAJAR.

app.use(cors())
app.use(bodyParser.json())

conectDB()  //Estamos ejecutando el modulo de nuestra conexion a la base de datos

require('./routes/user')(app)

app.listen(3000, () => {
    console.log(' se levanto correctamente.')
})