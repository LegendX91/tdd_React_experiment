import { render, screen } from "@testing-library/react";
import Header from "../Header";

describe("Testing the general rendering of the Header component", () => {
  it("should render the background image", () => {
    render(<Header />);
    const header = screen.getByTestId("header");
    expect(header).toBeVisible();
  });
  it("should render a title", () => {
      render(<Header />);
      const header = screen.getByTestId("header");
      expect(header).toHaveTextContent(/Testing Jest-React/i);
  })
  it("should render a title with proper style", () => {
      render(<Header />);
      const header = screen.getByTestId("header");
      const style = window.getComputedStyle(header);
      expect(style.fontSize).toBe("50px");
      expect(style.color).toBe("white");
      expect(style.textAlign).toBe("center");
      expect(style.fontStyle).toBe("italic");
      expect(style.textShadow).toBe("1px 2px 9px black");
  })
});
