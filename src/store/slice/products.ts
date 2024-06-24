import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getProducts } from "@/api/api";
import { ProductsState } from "@/types/productsStateType";

const initialState: ProductsState = {
  products: [],
  filteredProducts: [],
  isLoading: false,
  error: null,
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await getProducts();
    return response;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    filterProducts(state, action) {
      const { title, category } = action.payload;
      const filteredProducts = state.products.filter((product: any) => {
        const matchesTitle = product.name
          .toLowerCase()
          .includes(title.toLowerCase());
        const matchesCategory =
          category === "" ||
          category === "All categories" ||
          product.bsr_category === category;

        return matchesTitle && matchesCategory;
      });
      state.filteredProducts = filteredProducts;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
        state.error = null;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message ?? "Error fetching products";
      });
  },
});

export const { filterProducts } = productsSlice.actions;
export default productsSlice.reducer;
