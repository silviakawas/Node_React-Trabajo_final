const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

// Rutas
const taskRoutes = require('./routes/tasks.routes');

require('dotenv').config();


// Middlewares para cliente
app.use(cors());
app.use(express.json());
app.use('/api/tasks', taskRoutes);

// Uso de rutas

const startServer = async() =>{
    try{
        await mongoose.connect(process.env.MONGODB_URL);
        console.log('Base de datos conectada');
    }catch(err){
        console.log('Base de datos NO conectada');
    };

    app.listen(process.env.PORT, ()=> console.log('Servidor en ejecución en el puerto 3000'));
};

startServer();
