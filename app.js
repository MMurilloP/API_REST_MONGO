//enlazo el archivo conectado a la database. database>conexion.js
const { conexion } = require("./database/conexion");
const express = require('express')

// Inicializar la  app
console.log("App arrancada");

// concetar a la base de datos
conexion();


const app = express();
const port = 3000;
  
// Middlewares
app.use(express.json()); // Habilitar tipo de dato a recibir
app.use(express.urlencoded({ extended: true }));


// Módulos de Rutas
const providersApiRoutes = require('./routes/providersRoutes');
const productsRouters = require('./routes/productsRoutes');



//Rutas 
app.use('/api/providers', providersApiRoutes);
app.use('/api/products', productsRouters);


app.listen(port, () => {
    console.log(`CORRIENDO en el puerto ${port}`)
})