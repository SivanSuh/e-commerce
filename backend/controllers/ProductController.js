const ProductModel = require("../models/ProductModels");

const addProducts = async (req, res) => {
  try {
    const { title, price, image, category } = req.body;
    const products = await ProductModel.create({
      title: title,
      price: price,
      image: image,
      category: category,
    });
    if (products) return res.send(products);
    else return res.json({ msg: "failed products" });
  } catch (err) {}
};

const getAllProducts = async (req, res) => {
  try {
    const allProducts = await ProductModel.find();
    res.send(allProducts);
  } catch (err) {
    console.log(err);
  }
};
module.exports = {
  addProducts,
  getAllProducts,
};
