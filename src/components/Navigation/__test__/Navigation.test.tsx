
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navigation from "../Navigation";

const MockedNavigation = () => {
    return(
        <BrowserRouter>
            <Navigation elements={["Calculator", "Problems", "API", "Complex"]}/>
        </BrowserRouter>
    )
}

describe("Testing the general rendering of the Navigation component", () => {
  it("should render a list of 4 elements as links", () => {
      render(<MockedNavigation />);
      const listElements = screen.getAllByTestId(/navEl/i);
      expect(listElements).toHaveLength(4);
  });
  it("should change the link when pressed", () => {
      render(<MockedNavigation />);
      const el0 = screen.getByTestId(/navTo0/i);
      fireEvent.click(el0);
      expect(global.window.location.href).toContain(`${el0}`);
  });
});
