const express = require("express");

const { RifasController } = require("./controllers");

const router = express.Router();

module.exports.Products = (app) => {
  router.get("/", RifasController.get);

  app.use("/api/products", router);
};
