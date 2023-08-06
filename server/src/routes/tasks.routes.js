const express = require('express');
const taskRoutes = express.Router();
const controller = require('../controllers/tasks.controller');

/* Obtener todos los planes */
taskRoutes.get('/', controller.allTasks);

/* Crear un plan */
taskRoutes.post('/', controller.createTask);

/* Actualizar un plan */
taskRoutes.patch('/:id', controller.updateTask);

/* Eliminar un plan */
taskRoutes.delete('/:id', controller.deleteTask);

module.exports = taskRoutes;