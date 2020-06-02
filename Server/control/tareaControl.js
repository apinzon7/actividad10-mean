const Tarea = require('../Modelo/tareas')


//CREAR TAREA
function crearTarea(req, res){
    var tarea = new Tarea();
    var parametros = req.body;

    tarea.nombreEncargado = parametros.nombreEncargado;
    tarea.descripcionTarea = parametros.descripcionTarea
    tarea.estado = parametros.estado;

    tarea.save((err, tareaNueva)=>{
       if(err){
           res.status(500).send({message:"Error del servidor"});
       }else{
           if(!tareaNueva){
               res.status(200).send({message:"No fue posible realizar el registro de la tarea"});
           }else{
               res.status(200).send({
                   status:'Tarea Creada',
                   tarea: tareaNueva
               });
           }
       } 
    })
}

//OBTENER TAREA
function obtenerTarea(req, res){
    Tarea.find((err, tareasEncontradas)=>{
        if(err){
            res.status(500).send({message:"Error del servidor"});
        }else{
            if(!tareasEncontradas){
                res.status(200).send({message:"No fue posible encontrar la tarea"});
            }else{
                res.status(200).send({
                    status:'Tareas Encontradas',
                    tareas: tareasEncontradas
                });
            }
        } 
    })
}




//ACTUALIZAR TAREA
function actualizaTarea(req, res){
    var tareaId = req.params.id;
    var nuevosDatosTarea = req.body;

    Tarea.findByIdAndUpdate(tareaId, nuevosDatosTarea,(err, tareaActualizada)=>{
        if(err){
            res.status(500).send({message:"Error del servidor"});
        }else{
            if(!tareaActualizada){
                res.status(200).send({message:"No fue posible actualizar la tarea"});
            }else{
                res.status(200).send({
                    status:'Tareas Actualizada',
                    tarea: nuevosDatosTarea
                });
            }   
        }     
    })
}









//ELIMINAR TAREA
function eliminarTarea(req,res){
    var tareaId = req.params.id;

    Tarea.findByIdAndDelete(tareaId, (err, tareaEliminada)=>{
        if(err){
            res.status(500).send({message:"Error del servidor"});
        }else{
            if(!tareaEliminada){
                res.status(404).send({message:"No fue posible eliminar la tarea"});
            }else{
                res.status(200).send({
                    status:'Tareas Eliminada',
                    tarea: tareaEliminada
                });
            }   
        }     
    })
}




//exportamos las funciones
module.exports = {
    crearTarea,
    obtenerTarea,
    actualizaTarea,
    eliminarTarea
}