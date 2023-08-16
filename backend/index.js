const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();

const PORT = process.env.PORT;
const products = require("./routes/productsRoutes");
app.use(express.json());
app.use("/products", products);

mongoose.connect(process.env.MONGO_URL).then((e) => console.log("connect db"));
app.get("/", (req, res) => {
  res.send("çalışıyor usta");
});

app.listen(PORT, () => console.log(`${PORT} ' running`));
