const express = require('express');
const TareaControl = require('../control/tareaControl');


var api = express.Router();


//Ruta agregar tareas
api.post('/', TareaControl.crearTarea);
//Ruta consultar tareas
api.get('/', TareaControl.obtenerTarea);
//Ruta atcualizar tareas
api.put('/:id', TareaControl.actualizaTarea);
//Ruta eliminar tareas
api.delete('/:id', TareaControl.eliminarTarea);

module.exports = api;