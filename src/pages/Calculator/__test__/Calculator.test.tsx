
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Calculator from "../Calculator";

const MockedNavigation = () => {
    return(
        <BrowserRouter>
            <Calculator />
        </BrowserRouter>
    )
}

describe("Testing the general rendering of the Navigation component", () => {
  it("should render a list of 4 elements as links", () => {
      render(<MockedNavigation />);
      const listElements = screen.getAllByTestId(/innerNavEl/i);
      expect(listElements).toHaveLength(3);
  });
  it("should change the link when pressed", () => {
      render(<MockedNavigation />);
      const el0 = screen.getByTestId(/innerNavEl0/i);
      fireEvent.click(el0);
      expect(global.window.location.href).toContain(`${el0}`);
  });
});
