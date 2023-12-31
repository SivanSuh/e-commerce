import { api } from "./api";

const addProducts = async (data) => {
  return api({
    url: "/products/add-products",
    headers: {
      "Content-Type": "multipart/form-data",
    },
    method: "POST",
    data,
  });
};
const selectProduct = async (id) => {
  return api({
    url: `/products/all-products/${id}`,
    method: "GET",
  });
};
const getProducts = async () => {
  return api({
    url: "/products/all-products",
    headers: {
      "Content-Type": "multipart/form-data",
    },
    method: "GET",
  });
};
const getAllCategory = async () => {
  return api({
    url: "products/all-categories",
    method: "GET",
  });
};
const selectCategory = async (id) => {
  return api({
    url: `products/select-category/${id}`,
    method: "GET",
  });
};
const productService = {
  addProducts,
  getProducts,
  selectProduct,
  getAllCategory,
  selectCategory,
};

export default productService;
