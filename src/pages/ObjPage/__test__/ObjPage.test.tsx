import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import ObjPage from "../ObjPage";

interface mockProps {
  title: string;
}

const MockedNavigation = ({ title }: mockProps) => {
  return (
    <BrowserRouter>
      <ObjPage title={title} />
    </BrowserRouter>
  );
};

describe("Testing the general rendering of the ObjPage component", () => {
  it("should render page containing the right operation associated", () => {
    render(<MockedNavigation title="getCountry" />);
    const element = screen.getByTestId(/getCountry/i);
    expect(element).toBeInTheDocument();
  });
});

describe("Testing the inner called function correct invcation and results", () => {
  it("should correctly execute getCountry() when called", () => {
    render(<MockedNavigation title="getCountry" />);
    const operation = screen.getByTestId(/operation/i);
    userEvent.click(operation);
    expect(screen.getByTestId("results")).not.toHaveTextContent("[]");
  });
  
  it("should correctly execute getCities() when called", () => {
    render(<MockedNavigation title="getCities" />);
    const operation = screen.getByTestId(/operation/i);
    userEvent.click(operation);
    expect(screen.getByTestId("results")).not.toHaveTextContent("[]");
  });
});
