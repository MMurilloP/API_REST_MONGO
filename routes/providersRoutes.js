const express = require("express");
const controladorProvider = require("../controllers/providersController.js")

const providersRouter = express.Router();

providersRouter.get("/", controladorProvider.test);
providersRouter.post("/", controladorProvider.crearProvider);

module.exports = providersRouter;