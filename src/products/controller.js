const { ProductsServices } = require("./services");

module.exports.ProductsController = {
  getAvailables: async (req, res) => {
    try {
      const products = await ProductsServices.getAvailables();

      res.send(products);
    } catch (error) {
      return [];
    }
  },
};
