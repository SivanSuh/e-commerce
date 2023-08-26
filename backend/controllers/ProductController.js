const CategoryModels = require("../models/CategoryModels");
const ProductModel = require("../models/ProductModels");

const getCategory = async (req, res) => {
  try {
    const categories = await CategoryModels.find();
    if (categories) return res.send(categories);
  } catch (error) {
    throw error;
  }
};

const selectCategory = async (req, res) => {
  const { id } = req.params;
  try {
    const select = await ProductModel.find({ category: id });
    res.status(200).json(select);
  } catch (error) {
    res.status(500).json(error);
  }
};
const selectProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const selected = await ProductModel.findById(id);
    res.status(200).json(selected);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const addProducts = async (req, res) => {
  try {
    const { title, price, image, category } = req.body;
    const cate = await CategoryModels.findOne({
      categoryName: category,
    });
    console.log("caet", cate);

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
    const allProducts = await ProductModel.find().populate("category");
    res.send(allProducts);
  } catch (err) {
    console.log(err);
  }
};
module.exports = {
  addProducts,
  getAllProducts,
  getCategory,
  selectProduct,
  selectCategory,
};
