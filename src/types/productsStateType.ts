import { Product } from "@/app/types/productType";

export interface ProductsState {
  products: Product[];
  filteredProducts: Product[];
  isLoading: boolean;
  error: string | null;
}
