import { Product } from "@/types/productType";
import { FC } from "react";
import Link from "next/link";

const ProductItem: FC<Product> = ({
  img,
  name,
  price,
  link,
  asin,
  bsr_category,
}) => {
  return (
    <article className="flex items-center justify-between max-w-screen-md gap-8 w-full p-5 bg-gray-100">
      <div className="h-44 w-52">
        <img className="w-full h-full object-contain" src={img} alt={name} />
      </div>
      <div className="flex flex-col w-full gap-4 text-gray-900">
        <h2 className="text-lg font-semibold">{name}</h2>
        <div className="flex justify-between gap-4">
          <div className="w-55">
            <p className="text-base font-semibold">Price: ${price}</p>
            <p className="text-base font-medium">Asin: {asin}</p>
            <p className="text-base font-semibold italic">
              Category: {bsr_category}
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <a
              className="bg-transparent border-2 border-gray-900 text-gray-900 px-4 py-2 w-fit-content rounded font-medium transition duration-300 ease-in-out hover:bg-gray-900 hover:text-white hover:shadow-md"
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              View on Amazon
            </a>
            <Link
              href={`/product/${asin}`}
              className="px-4 py-2 w-fit-content rounded bg-transparent border-2 border-blue-500 text-blue-500 font-medium transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white"
            >
              See details
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProductItem;
