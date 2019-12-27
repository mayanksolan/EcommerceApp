const express = require("express");
const router = express.Router();
const config = require("config");

const Product = require("../../models/Product");

router.get("/", (req, res) => {
  try {
    Product.find({}, function(err, products) {
      res.json(products);
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
