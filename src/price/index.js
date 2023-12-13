const express = require("express");

const { PricesController } = require("./controller");

const router = express.Router();

module.exports.Price = (app) => {
  router.get("/:user_id/:nombre_producto", PricesController.getPriceUser);

  app.use("/price", router);
};
