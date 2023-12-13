const express = require("express");

const { ProductsController } = require("./controller");

const router = express.Router();

module.exports.Products = (app) => {
  router.get("/", ProductsController.getAvailables);

  app.use("/products", router);
};
