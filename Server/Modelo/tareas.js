const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TareaSchema = new Schema({
    nombreEncargado: String,
    descripcionTarea: String,
    estado: String
})

module.exports = mongoose.model('Tarea', TareaSchema)
