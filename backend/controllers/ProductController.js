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
module.exports = {
  addProducts,
};
