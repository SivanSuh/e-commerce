const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
dotenv.config();

const PORT = process.env.PORT;
app.use(express.json());

// router import
const products = require("./routes/productsRoutes");
const auth = require("./routes/authRoutes");

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("connect db");
  } catch (error) {
    throw error;
  }
};

app.use(cors());
app.use("/products", products);
app.use("/auth", auth);

app.listen(PORT, () => {
  connect();
  console.log(`${PORT} ' running`);
});
