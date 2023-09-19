const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

dotenv.config();

const PORT = process.env.PORT;
//app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// router import
const products = require("./routes/productsRoutes");
const auth = require("./routes/authRoutes");

app.use("/uploads", express.static("uploads"));

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("connect db");
  } catch (error) {
    throw error;
  }
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(cors());
app.use("/products", products);
app.use("/auth", auth);

app.listen(PORT, () => {
  connect();
  console.log(`${PORT} ' running`);
});
