const productModel = require("../models/Products.js")

const test = (req,res) => {
    res.status(200).json({
        mensaje: "Soy una accion de prueba en mi controllador productos"
    })
}

const crearProduct = (req,res) => {
    const datosIntroducidos = req.body;
    const newProduct = new productModel(datosIntroducidos);
    newProduct.save((error, productGuardado)=>{
         if (error || !productGuardado) {
            res.status(400).json({
                status: "error",
                mensaje:"No se ha guardado el Product",
            })
        } else {
                res.status(200).json({
                    status: "Success",
                    Product: productGuardado,
                    mensaje: "Product guardado con exito"           
        })   
       }
    })
}

//[GET] http://localhost:3000/api/products Retorna un objeto con los datos de todos los productos. Retorna un status 200. Usar populate() para que traiga los datos del proveedor de cada producto.

//[POST] http://localhost:3000/api/products Se envía por POST los datos del producto a crear y retorna un status 201. Payload {message: "producto creado",product:{datos_del_producto_creado}. Primero tendréis que traer los datos del proveedor para obtener el ID_provider. Después se podrá crear el producto.

module.exports = {
    test,
    crearProduct,
    

}
