import axios from "../axios.config";

const LOCAL_STORAGE_KEY = "products";

export async function fetchProducts() {
  const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (stored) {
    return JSON.parse(stored);
  }

  const res = await axios.get("https://fakestoreapi.com/products");
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(res.data));
  return res.data;
}
