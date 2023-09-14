const {
  addProducts,
  getAllProducts,
  getCategory,
  selectProduct,
  selectCategory,
} = require("../controllers/ProductController");
const multerConfig = require("../config/fileUpload");

const router = require("express").Router();

router.post("/add-products", multerConfig.single("image"), addProducts);
router.get("/all-products", getAllProducts);
router.get("/all-categories", getCategory);
router.get("/all-products/:id", selectProduct);
router.get("/select-category/:id", selectCategory);

module.exports = router;
