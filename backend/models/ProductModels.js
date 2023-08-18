const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductModels = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    price: {
      type: String,
      required: true,
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductModels);
