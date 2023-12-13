const User = require("../models/users");
const Product = require("../models/products");
const SpecialPrice = require("../adapters/specialPrice");
const Price = require("../adapters/price");

module.exports.PricesServices = {
  getPriceUser: async (user_id, nombre_producto) => {
    try {
      const user = await User.findById(user_id);

      const product = await Product.findOne({ name: nombre_producto });

      if (!product) {
        return "Este producto no existe en nuestro catálogo";
      }

      if (user.special_price.includes(product.brand) && product.stock > 0) {
        const response = SpecialPrice(product);

        return response;
      }

      const response = Price(product);

      return response;
    } catch (error) {
      return { error: "usuario y/o producto no encontrados" };
    }
  },
};
