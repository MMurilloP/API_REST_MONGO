const providerModel = require("../models/Providers.js")

const test = (req,res) => {
    res.status(200).json({
        mensaje: "Soy una accion de prueba en mi controllador providers"
    })
}

const crearProvider = (req,res) => {
    const datosIntroducidos = req.body;
    const newProvider = new providerModel(datosIntroducidos);
    newProvider.save((error, providerGuardado)=> {
        if (error || !providerGuardado) {
            res.status(400).json({
                status: "error",
                mensaje:"No se ha guardado el provider",
            })
        } else {
            res.status(200).json({
                status: "Success",
                Provider: providerGuardado,
                mensaje: "Provider guardado con exito"
            })
        }
    })
}

//[POST] http://localhost:3000/api/providers Se envía por POST los datos del producto a crear y retorna un status 201. Payload {message: "proveedor creado", product:{datos_del_proveedor_creado}}.

//[GET] http://localhost:3000/api/providers Retorna un objeto con los datos de todos los providers. Retorna un status 200.

module.exports = {
    test,
    crearProvider,

}