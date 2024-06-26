"use client";
import React, { useEffect, useState } from "react";
import { Product } from "@/types/productType";
import Link from "next/link";
import { useRouter } from "next/router";
// import { AppDispatch, RootState, store } from "@/store/store";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchProducts } from "@/store/slice/products";
// import { getProducts } from "@/api/api";
// import { GetServerSideProps } from "next";

const ProductPage = ({ products }: any) => {
  const [showContent, setShowContent] = useState(false);
  // const dispatch: AppDispatch = useDispatch();
  // const { products, isLoading } = useSelector(
  //   (state: RootState) => state.products
  // );
  const router = useRouter();
  const { id } = router.query;
  const singleProduct = products.find((product: Product) => {
    return product.asin === id;
  });
  // useEffect(() => {
  //   dispatch(fetchProducts());
  // }, [dispatch]);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setShowContent(true);
  //   }, 500);
  //
  //   return () => clearTimeout(timer);
  // }, []);

  // if (isLoading || !showContent) {
  //   return (
  //     <div className="flex justify-center mt-8">
  //       <h6 className="text-lg">Loading...</h6>
  //     </div>
  //   );
  // }

  if (!singleProduct) {
    return (
      <div className="flex justify-center mt-8">
        <h6 className="text-lg">Product not found</h6>
      </div>
    );
  }

  return (
    <section className="flex flex-col items-center">
      <article className="flex items-center justify-between max-w-screen-md gap-8 w-full p-5 bg-gray-100">
        <div className="h-44 w-52">
          <img
            className="w-full h-full object-contain"
            src={singleProduct.img}
            alt={singleProduct.name}
          />
        </div>
        <div className="flex flex-col w-full gap-4 text-gray-900">
          <h2 className="text-lg font-semibold">{singleProduct.name}</h2>
          <div className="flex justify-between gap-4">
            <div className="w-55">
              <p className="text-base font-semibold">
                Price: ${singleProduct.price}
              </p>
              <p className="text-base font-medium">
                Asin: {singleProduct.asin}
              </p>
              <p className="text-base font-semibold italic">
                Category: {singleProduct.bsr_category}
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <a
                className="bg-transparent border-2 border-gray-900 text-gray-900 px-4 py-2 w-fit-content rounded font-medium transition duration-300 ease-in-out hover:bg-gray-900 hover:text-white hover:shadow-md"
                href={singleProduct.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                View on Amazon
              </a>
              <Link
                href={`/products/${singleProduct.asin}`}
                className="px-4 py-2 w-fit-content rounded bg-transparent border-2 border-blue-500 text-blue-500 font-medium transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white"
              >
                See details
              </Link>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};
export async function getServerSideProps(context: any) {
  const protocol = context.req.headers["x-forwarded-proto"] || "http";
  const host = context.req.headers["host"];
  const url = `${protocol}://${host}/db.json`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    const products = data.products;

    return {
      props: {
        products,
      },
    };
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return {
      props: {
        products: [],
      },
    };
  }
}
export default ProductPage;
