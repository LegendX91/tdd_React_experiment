import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import APIPage from "../APIPage";

const mockedAPICall = jest.fn(); //mock function

interface mockProps {
  title: string;
}

const MockedNavigation = ({ title }: mockProps) => {
  return (
    <BrowserRouter>
      <APIPage title={title} />
    </BrowserRouter>
  );
};

describe("Testing the general rendering of the APIPage component", () => {
  it("should render page containing the right operation associated", () => {
    render(<MockedNavigation title="fetchByCity" />);
    const element = screen.getByTestId(/fetchByCity/i);
    expect(element).toBeInTheDocument();
  });
});

describe("Testing the inner called function correct invcation and results", () => {
  it("should correctly execute fetchByCity when called", () => {
    render(<MockedNavigation title="fetchByCity" />);
    const op1 = screen.getByTestId(/operator1/i);
    const operation = screen.getByTestId(/operation/i);
    userEvent.type(op1, "Bologna");
    userEvent.click(operation);
    expect(screen.queryByTestId("results")).not.toHaveTextContent("");
  });

  it("should correctly execute fetchByCityCountry when called", () => {
    render(<MockedNavigation title="fetchByCityCountry" />);
    const op1 = screen.getByTestId(/operator1/i);
    const op2 = screen.getByTestId(/operator2/i);
    const operation = screen.getByTestId(/operation/i);
    userEvent.type(op1, "Bologna");
    userEvent.type(op2, "IT");
    userEvent.click(operation);
    expect(screen.queryByTestId("results")).not.toHaveTextContent("");
  });
});
