const mongoose = require("mongoose");
mongoose.set('strictQuery', false)

const db = async() => {
    try{
        await mongoose.connect("mongodb://localhost:27017/fakeshop");
        console.log("Conectado correctamente a la base de datos: fakeshop")
    } catch(error) {
        console.log(error);
        throw new Error ("No se ha podido conectar a la base de datos")
    }
}

module.exports = db;

