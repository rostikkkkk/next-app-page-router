"use client";

import { FC, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "@/store/slice/products";
import ProductItem from "../components/ProductItem";
import { Product } from "@/types/productType";
import { AppDispatch, RootState } from "@/store/store";
import { useSearchParams } from "next/navigation";

const ProductList: FC = () => {
  const [showContent, setShowContent] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const { products, filteredProducts, isLoading, error } = useSelector(
    (state: RootState) => state.products
  );
  const searchParams = useSearchParams();

  const title = searchParams ? searchParams.get("title") : null;
  const category = searchParams ? searchParams.get("category") : null;

  const queryParamsExist = useMemo(
    () => title !== null || category !== null,
    [title, category]
  );

  const productsList = useMemo(
    () => (queryParamsExist ? filteredProducts : products),
    [queryParamsExist, filteredProducts, products]
  );
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading || !showContent) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }
  if (!productsList || productsList.length === 0) {
    return <p>No products found.</p>;
  }

  return (
    <section data-testid="product-list">
      {productsList.map((product: Product) => (
        <ProductItem
          key={product.asin}
          img={product.img}
          name={product.name}
          price={product.price}
          link={product.link}
          asin={product.asin}
          bsr_category={product.bsr_category}
        />
      ))}
    </section>
  );
};

export default ProductList;
