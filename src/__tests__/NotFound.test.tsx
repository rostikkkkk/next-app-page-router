import { render, screen } from "@testing-library/react";
import NotFound from "@/pages/404";

describe("NotFound", () => {
  it("renders the NotFound component", () => {
    render(<NotFound />);

    const notFoundText = screen.getByText(/Отакої, сторінки не існує/);
    expect(notFoundText).toBeInTheDocument();
  });

  it("renders a link to the home page", () => {
    render(<NotFound />);

    const homeLink = screen.getByRole("link", {
      name: /Повернутися на головну сторінку/,
    });
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute("href", "/");
  });
});
