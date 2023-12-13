const express = require("express");
const cors = require("cors");

const { dbConnect } = require("./src/database/mongo.js");

const { Index } = require("./src/index/index.js");
const { Products } = require("./src/products/index.js");
const { Price } = require("./src/price/index.js");
const { NotFound } = require("./src/index/index.js");

const app = express();

app.use(cors());

app.use(express.json());

Index(app);
Products(app);
Price(app);
NotFound(app);

app.listen(2023, () => {
  console.log("challenge back");
});

dbConnect();
