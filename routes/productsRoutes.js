const express = require("express");
const controladorProduct = require("../controllers/productsController.js")
const productsRouter = express.Router();


productsRouter.get('/',controladorProduct.getProducts);
productsRouter.post('/',controladorProduct.createProduct);
productsRouter.delete('/', controladorProduct.deleteProduct);
productsRouter.put('/', controladorProduct.updateProduct);


module.exports = productsRouter;
