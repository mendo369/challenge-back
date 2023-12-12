const mongoose = require("mongoose");
const { config } = require("../config/config");

const dbConnect = () => {
  const DB_URI = config.uri_db;
  mongoose
    .connect(DB_URI)
    .then((res) => console.log("Conexión exitosa"))
    .catch((err) => console.log(err));
};

module.exports = { dbConnect };
