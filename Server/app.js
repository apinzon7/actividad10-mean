const express = require('express');
const cors = require('cors');
const app = express();

//Declarar las rutas de la api
const tareaRutas = require('./rutas/tareaRuta')
//MIDDLEWARES
app.use(express.json());
app.use(cors());

//Consumo de las rutas
app.use('/api', tareaRutas)


module.exports = app;