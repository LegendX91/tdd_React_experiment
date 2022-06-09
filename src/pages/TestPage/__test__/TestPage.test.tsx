import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import TestPage from "../TestPage";

const MockedNavigation = () => {
  return (
    <BrowserRouter>
      <TestPage
        elements={[
          { name: "test", image: "test", description: "lorem ipsum" },
          { name: "test", image: "test", description: "lorem ipsum" },
          { name: "test", image: "test", description: "lorem ipsum" },
        ]}
        title={"Test"}
      />
    </BrowserRouter>
  );
};

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
