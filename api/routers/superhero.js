const { Router } = require('express');

const heroController = require('../controllers/superhero.js');

const heroRouter = Router();

heroRouter.get("/", heroController.index);
heroRouter.get("/:id", heroController.show);

module.exports = heroRouter;
