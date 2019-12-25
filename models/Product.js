const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  brand: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  parent_category: {
    type: String,
    required: true
  },
  breadcrumb: {
    type: Array,
    required: true
  },
  specification: {
    processor: {
      type: String,
      required: true
    },
    battery: {
      type: String
    },
    size: {
      type: String,
      required: true
    }
  }
});

module.exports = Product = mongoose.model("product", ProductSchema);
