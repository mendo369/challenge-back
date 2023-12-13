const Products = require("../models/products");

module.exports.ProductsServices = {
  getAvailables: async () => {
    try {
      const products = await Products.find({ stock: { $gt: 0 } });

      return products;
    } catch (error) {
      console.warn(error);
      return [];
    }
  },
};
