import { Product } from "@/types/productType";

export const getProducts = async (): Promise<Product[]> => {
  const request = await fetch("/db.json");
  const data = await request.json();
  return data.products;
};
