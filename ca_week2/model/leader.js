const mongoose = require("mongoose");
const Schema = mongoose.Schema();

const leaderschema = new Schema(
  {
    name: {
      type: String,
      requried: true,
    },
    image: {
      type: String,
      requried: true,
    },
    designation: {
      type: String,
      requried: true,
    },
    abbr: {
      type: String,
      requried: true,
    },
    designation: {
      type: String,
      requried: true,
    },
    featured: {
      type: Boolean,
      requried: true,
    },
  },
  {
    timestamp: true,
  }
);

const leader = mongoose.model("leader", leaderschema);
module.exports = leader;
