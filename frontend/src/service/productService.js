import { api } from "./api";

const addProducts = async (data) => {
  return api({
    url: "/products/add-products",
    method: "POST",
    data,
  });
};
const selectProduct = async (id) => {
  return api({
    url: `/products/add-products/${id}`,
    method: "GET",
  });
};
const getProducts = async () => {
  return api({
    url: "/products/all-products",
    method: "GET",
  });
};
const getAllCategory = async () => {
  return api({
    url: "products/all-categories",
    method: "GET",
  });
};
const productService = {
  addProducts,
  getProducts,
  selectProduct,
  getAllCategory,
};

export default productService;
