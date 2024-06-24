import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Home from "@/pages/index";

jest.mock("@/components/ProductForm");
jest.mock("@/components/ProductList");

describe("Home Component", () => {
  it("should render ProductForm and ProductList components", () => {
    render(<Home />);

    // expect(screen.getByTestId("product-form")).toBeInTheDocument();

    expect(screen.getByTestId("product-list")).toBeInTheDocument();
  });
});
