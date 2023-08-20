const {
  addProducts,
  getAllProducts,
  getCategory,
} = require("../controllers/ProductController");

const router = require("express").Router();

router.post("/add-products", addProducts);
router.get("/all-products", getAllProducts);
router.get("/all-categories", getCategory);

module.exports = router;
