import { render, screen } from "@testing-library/react";
import Header from "@/components/Header";

describe("Header", () => {
  it("renders the NotFound component", () => {
    render(<Header />);
    const headerText = screen.getByText(/Головна сторінка/i);
    expect(headerText).toBeInTheDocument();
  });
});
