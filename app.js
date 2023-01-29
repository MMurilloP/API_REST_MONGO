//enlazo el archivo conectado a la database. database>conexion.js
const db = require("./utils/dbConexion");
const express = require('express')

// Inicializar la  app
console.log("App arrancada");

// concetar a la base de datos
db();
const app = express();
const port = 3000;


app.use(express.json()); // Habilitar tipo de dato a recibir
app.use(express.urlencoded({ extended: true }));


// Módulos de Rutas
const providersRoutes = require('./routes/providersRoutes');
const productsRouters = require('./routes/productsRoutes');


//Rutas 
app.use('/api/providers', providersRoutes);
app.use('/api/products', productsRouters);



app.listen(port, () => {
    console.log(`Servidor en el puerto ${port}`)
})