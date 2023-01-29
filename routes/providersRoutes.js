const express = require("express");
const controladorProvider = require("../controllers/providersController.js")
const providersRouter = express.Router();


providersRouter.get('/',controladorProvider.getProviders);

providersRouter.post('/',controladorProvider.createProvider);

providersRouter.delete('/', controladorProvider.deleteProvider);

providersRouter.put('/', controladorProvider.updateProvider);


module.exports = providersRouter;