const {
  addProducts,
  getAllProducts,
} = require("../controllers/ProductController");

const router = require("express").Router();

router.post("/add-products", addProducts);
router.get("/all-products", getAllProducts);

module.exports = router;
