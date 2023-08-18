const CategoryModels = require("../models/CategoryModels");
const ProductModel = require("../models/ProductModels");

const addProducts = async (req, res) => {
  try {
    const { title, price, image, category } = req.body;
    const cate = await CategoryModels.findOne({ categoryName: category });
    console.log("caet", cate);
    // console.log("cate", cate);
    // if (!cate) {
    //   await CategoryModels.create({
    //     categoryName: category,
    //   });
    // }
    const products = await ProductModel.create({
      title: title,
      price: price,
      image: image,
      category: cate,
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
