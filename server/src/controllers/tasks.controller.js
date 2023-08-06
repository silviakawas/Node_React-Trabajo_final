const fs = require('fs');
const path = require('path');
const {v4} = require('uuid');
const TaskModel = require('../../schemes/task.scheme');
const controller = {};


// Leer los usuarios de la base de datos
controller.allTasks = async(req, res) =>{
    try{

        const tasks = await TaskModel.find();
        res.send(tasks);

    }catch(err){

        res.status(500).send({error: 'Error al leer la base de datos'});

    }
};

// Crear un nuevo plan
controller.createTask = async (req, res) =>{

    let tasks = await TaskModel.find();

    const taskExist = tasks.some(task => task.title === req.body.title);

    if(taskExist) return res.status(409).send({error: 'Ya has introducido este plan anteriormente'});

    const {title, date, note} = req.body;

    const newTask = TaskModel({
        _id: v4(),
        title,
        date,
        note
    });

    await newTask.save();

    tasks = await TaskModel.find();

    res.send(tasks);

};


// Actualizar planes
controller.updateTask = async (req, res) =>{

    let task = await TaskModel.findById(req.params.id);

    if(!task){
        return res.status(409).send({error: 'El plan no existe'});
    }

    const {title, date, note} = req.body;

    task.title = title;
    task.date = date;
    task.note = note;

    await task.save();

    const tasks = await TaskModel.find();

    res.send(tasks);
    
};


// Borrar planes
controller.deleteTask = async(req, res) =>{

    let task = await TaskModel.findById(req.params.id);

    if(!task){
        return res.status(409).send({error: 'El plan no existe'});
    }

    await task.deleteOne();

    const tasks = await TaskModel.find();

    res.send(tasks);
}



module.exports = controller;