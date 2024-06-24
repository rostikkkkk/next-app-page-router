import { render } from "@testing-library/react";
import ProductItem from "@/components/ProductItem";

const productData = {
  img: "example.jpg",
  name: "Example Product",
  price: "99.99",
  link: "https://example.com",
  asin: "B01ABCDEF",
  bsr_category: "Example Category",
};

test("renders ProductItem component correctly", () => {
  const { getByText, getByAltText } = render(
    <ProductItem
      img={productData.img}
      name={productData.name}
      price={productData.price}
      link={productData.link}
      asin={productData.asin}
      bsr_category={productData.bsr_category}
    />
  );

  const productNameElement = getByText(productData.name);
  expect(productNameElement).toBeInTheDocument();

  const productPriceElement = getByText(`Price: $${productData.price}`);
  expect(productPriceElement).toBeInTheDocument();

  const productAsinElement = getByText(`Asin: ${productData.asin}`);
  expect(productAsinElement).toBeInTheDocument();

  const productCategoryElement = getByText(
    `Category: ${productData.bsr_category}`
  );
  expect(productCategoryElement).toBeInTheDocument();

  const productImageElement = getByAltText(productData.name);
  expect(productImageElement).toBeInTheDocument();
  expect(productImageElement).toHaveAttribute("src", productData.img);

  const viewOnAmazonLink = getByText("View on Amazon");
  expect(viewOnAmazonLink).toHaveAttribute("href", productData.link);

  const seeDetailsLink = getByText("See details");
  expect(seeDetailsLink).toHaveAttribute(
    "href",
    `/product/${productData.asin}`
  );
});
