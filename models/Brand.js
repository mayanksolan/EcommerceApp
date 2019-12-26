const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BrandSchema = new Schema({
  name: {
    type: String,
    required: true
  }
});

module.exports = Brand = mongoose.model("Brand", BrandSchema, "brands");
