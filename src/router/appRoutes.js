const express = require("express");
const AppController = require("../controller/appController");

const appRouter = express.Router();
const appController = new AppController();

appRouter.get("/get-products", (req, res) =>
  appController.getAllProducts(req, res)
);

module.exports = appRouter;
