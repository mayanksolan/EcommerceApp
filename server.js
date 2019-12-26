const express = require("express");
const connectDB = require("./config/db");
const mongoose = require("mongoose");

const app = express();

//connect database
connectDB();

const Product = require("./models/Product");
const Brand = require("./models/Brand");

//Init middleware
app.use(express.json({ extended: false }));
app.use(express.urlencoded({ extended: false }));

let db = mongoose.connection;
db.once("open", () => console.log("Connected To Mongo DB"));
db.on("error", err => console.log(err));

// app.get("/", (req, res) => {
//   res.send("req.body.name");
// });

app.get("/", (req, res) => {
  try {
    Brand.find({}, function(err, brands) {
      res.json(brands);
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

// define routes
//app.use("/api/products", require("./routes/api/products"));
// app.use("/api/auth", require("./routes/api/auth"));
// app.use("/api/profile", require("./routes/api/profile"));
// app.use("/api/posts", require("./routes/api/posts"));

const PORT = process.env.port || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
