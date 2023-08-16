const { addProducts } = require("../controllers/ProductController");

const router = require("express").Router();

router.post("/add-products", addProducts);

module.exports = router;
