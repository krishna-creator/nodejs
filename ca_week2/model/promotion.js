const mongoose = require("mongoose");
require("mongoose-currency").loadType("mongoose");
const Currency = mongoose.Types.Currency;
const Schema = mongoose.Schema();

const promoschema = new Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
    default: "",
  },
  price: {
    type: Currency,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  featured: {
    type: Boolean,
    required: true,
  },
});

const promotions = mongoose.model("promotion", promoschema);
module.exports = promotions;
