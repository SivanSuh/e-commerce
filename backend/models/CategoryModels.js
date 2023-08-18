const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CategoryModels = new Schema(
  {
    categoryName: String,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("Category", CategoryModels);
