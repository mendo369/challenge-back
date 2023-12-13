const { Schema, model } = require("mongoose");

const productSchema = new Schema({
  name: {
    type: String,
  },
  stock: {
    type: Number,
  },
  base_price: {
    type: Number,
  },
  special_price: {
    type: Number,
  },
  brand: {
    type: String,
  },
});

const Product = model("Product", productSchema);

module.exports = Product;
