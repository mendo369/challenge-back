const express = require("express");

module.exports.Index = (app) => {
  const router = express.Router();
  router.get("/", (req, res) => {
    const menu = {
      products: `http://${req.headers.host}/products`,
      prices: `http://${req.headers.host}/price/6578d0f3a7efaa2d4961a992/campus`,
    };
    res.status(200).json(menu);
  });
  app.use("/", router);
};

module.exports.NotFound = (app) => {
  const router = express.Router();
  router.all("*", (req, res) => {
    res.status(404).json({ error: "Not found" });
  });
  app.use("/", router);
};
