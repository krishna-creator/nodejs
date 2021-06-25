const mongoose = require("mongoose");
const schema = mongoose.Schema;

const data = new schema(
  {
    msg: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const record = mongoose.model("record", data);

module.exports = record;
