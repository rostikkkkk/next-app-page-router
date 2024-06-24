import { render, screen } from "@testing-library/react";
import Footer from "@/components/Footer";

describe("Footer", () => {
  it("renders the Footer component", () => {
    render(<Footer />);
    const footerText = screen.getByText(/All rights reserved/i);
    expect(footerText).toBeInTheDocument();
  });
});
