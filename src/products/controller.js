const { ProductsServices } = require("./services");

module.exports.ProductsController = {
  getAvailables: async (req, res) => {
    const products = await ProductsServices.getAvailables();

    res.send(products);
  },
};
