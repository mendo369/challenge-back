const express = require("express");

module.exports.Index = (app) => {
  const router = express.Router();
  router.get("/", (req, res) => {
    const menu = {
      products: `https://${req.headers.host}/api/products`,
    };
    res.status(200).json(menu);
  });
  app.use("/", router);
};

module.exports.NotFound = (app) => {
  const router = express.Router();
  router.all("*", (req, res) => {
    // Response.error(res, new createError.NotFound());
    res.status(404).json({ error: "Not found" });
  }); //all recibe cualquier verbo en la url
  app.use("/", router);
};
