import productsReducer, {
  fetchProducts,
  filterProducts,
} from "@/store/slice/products";
import { ProductsState } from "@/types/productsStateType";

const initialState: ProductsState = {
  products: [],
  filteredProducts: [],
  isLoading: false,
  error: null,
};

describe("products reducer", () => {
  it("should handle initial state", () => {
    expect(productsReducer(undefined, { type: "unknown" })).toEqual(
      initialState
    );
  });

  it("should handle fetchProducts.pending", () => {
    const action = { type: fetchProducts.pending.type };
    const state = productsReducer(initialState, action);
    expect(state.isLoading).toBe(true);
  });

  it("should handle fetchProducts.fulfilled", () => {
    const products = [
      {
        img: "https://images-na.ssl-images-amazon.com/images/I/81TznWao4xL._SX355_.jpg",
        asin: "B01CS4CWE2",
        price: "20.99",
        bsr_category: "Arts, Crafts & Sewing",
        link: "https://www.amazon.com/dp/B01CS4CWE2",
        name: "SL crafts Mixed 100pcs Skeleton Keys & 100 pcs Kraft Tags Antiqued Brass Bronze Charms Pendants Wedding favor 34mm-68mm",
      },
    ];
    const action = { type: fetchProducts.fulfilled.type, payload: products };
    const state = productsReducer(initialState, action);
    expect(state.isLoading).toBe(false);
    expect(state.products).toEqual(products);
    expect(state.error).toBe(null);
  });

  it("should handle filterProducts", () => {
    const initialStateWithProducts = {
      ...initialState,
      products: [
        {
          img: "https://images-na.ssl-images-amazon.com/images/I/81TznWao4xL._SX355_.jpg",
          asin: "B01CS4CWE2",
          price: "20.99",
          bsr_category: "Arts, Crafts & Sewing",
          link: "https://www.amazon.com/dp/B01CS4CWE2",
          name: "SL crafts Mixed 100pcs Skeleton Keys & 100 pcs Kraft Tags Antiqued Brass Bronze Charms Pendants Wedding favor 34mm-68mm",
        },
      ],
    };
    const action = {
      type: filterProducts.type,
      payload: {
        title:
          "SL crafts Mixed 100pcs Skeleton Keys & 100 pcs Kraft Tags Antiqued Brass Bronze Charms Pendants Wedding favor 34mm-68mm",
        category: "Arts, Crafts & Sewing",
      },
    };
    const state = productsReducer(initialStateWithProducts, action);
    expect(state.filteredProducts).toEqual([
      {
        img: "https://images-na.ssl-images-amazon.com/images/I/81TznWao4xL._SX355_.jpg",
        asin: "B01CS4CWE2",
        price: "20.99",
        bsr_category: "Arts, Crafts & Sewing",
        link: "https://www.amazon.com/dp/B01CS4CWE2",
        name: "SL crafts Mixed 100pcs Skeleton Keys & 100 pcs Kraft Tags Antiqued Brass Bronze Charms Pendants Wedding favor 34mm-68mm",
      },
    ]);
  });
});
