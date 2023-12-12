const express = require("express");
const cors = require("cors");

const { dbConnect } = require("./src/libs/mongoose.js");

const { Index } = require("./src/index/index.js");
const { NotFound } = require("./src/index/index.js");

const app = express();

app.use(cors());

app.use(express.json());

Index(app);
NotFound(app);

app.listen(8080, () => {
  console.log("challenge back");
});

dbConnect();
