const { PricesServices } = require("./services");

module.exports.PricesController = {
  getPriceUser: async (req, res) => {
    const user_id = req.params.user_id;
    const nombre_producto = req.params.nombre_producto;

    const data = await PricesServices.getPriceUser(user_id, nombre_producto);

    res.send(data);
  },
};
