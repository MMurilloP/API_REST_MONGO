const express = require("express");
const controladorProduct = require("../controllers/productsController.js")

const productsRouter = express.Router();

productsRouter.get("/", controladorProduct.test);
productsRouter.post("/", controladorProduct.crearProduct);



module.exports = productsRouter;