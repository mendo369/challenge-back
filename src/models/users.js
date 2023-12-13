const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  name: {
    type: String,
  },
  special_price: {
    type: Array,
  },
});

const User = model("User", userSchema);

module.exports = User;
