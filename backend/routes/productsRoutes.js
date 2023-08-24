const {
  addProducts,
  getAllProducts,
  getCategory,
  selectProduct,
} = require("../controllers/ProductController");

const router = require("express").Router();

router.post("/add-products", addProducts);
router.get("/all-products", getAllProducts);
router.get("/all-categories", getCategory);
router.get("/all-products/:id", selectProduct);

module.exports = router;
