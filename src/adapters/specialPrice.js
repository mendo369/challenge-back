function SpecialPrice(data) {
  return {
    stock: data.stock,
    brand: data.brand,
    name: data.name,
    price: data.special_price,
  };
}

module.exports = SpecialPrice;
