const express = require("express");
const connectDB = require("./config/db");

const app = express();

//connect database
connectDB();

//Init middleware
app.use(express.json({ extended: false }));
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("req.body.name");
});

// define routes
app.use("/api/products", require("./routes/api/products"));
// app.use("/api/auth", require("./routes/api/auth"));
// app.use("/api/profile", require("./routes/api/profile"));
// app.use("/api/posts", require("./routes/api/posts"));

const PORT = process.env.port || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
