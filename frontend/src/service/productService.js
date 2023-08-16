import { api } from "./api";

const addProducts = async (data) => {
  return api({
    url: "/products/add-products",
    method: "POST",
    data,
  });
};
const getProducts = async () => {
  return api({
    url: "/products/all-products",
    method: "GET",
  });
};
const productService = {
  addProducts,
  getProducts,
};

export default productService;
