function Price(data) {
  return {
    stock: data.stock,
    brand: data.brand,
    name: data.name,
    price: data.base_price,
  };
}

module.exports = Price;
