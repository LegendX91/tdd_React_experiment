import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import FuncPage from "../FuncPage";

interface mockProps {
  title: string;
}

const MockedNavigation = ({ title }: mockProps) => {
  return (
    <BrowserRouter>
      <FuncPage title={title} />
    </BrowserRouter>
  );
};

describe("Testing the general rendering of the FuncPage component", () => {
  it("should render page containing the right operation associated", () => {
    render(<MockedNavigation title="Exponential" />);
    const element = screen.getByTestId(/Exponential/i);
    expect(element).toBeInTheDocument();
  });
});

describe("Testing the inner called function correct invcation and results", () => {
  it("should correctly execute Factorial when called", () => {
    render(<MockedNavigation title="Factorial" />);
    const op1 = screen.getByTestId(/operator1/i);
    const operation = screen.getByTestId(/operation/i);
    userEvent.type(op1, "5");
    userEvent.click(operation);
    expect(screen.getByTestId("results")).toHaveTextContent("120");
  });

  it("should correctly execute Exponential when called", () => {
    render(<MockedNavigation title="Exponential" />);
    const op1 = screen.getByTestId(/operator1/i);
    const op2 = screen.getByTestId(/operator2/i);
    const operation = screen.getByTestId(/operation/i);
    userEvent.type(op1, "3");
    userEvent.type(op2, "2");
    userEvent.click(operation);
    expect(screen.getByTestId("results")).toHaveTextContent("9");
  });

  it("should correctly execute TaylorSeries when called", () => {
    render(<MockedNavigation title="TaylorSeries" />);
    const op1 = screen.getByTestId(/operator1/i);
    const op2 = screen.getByTestId(/operator2/i);
    const operation = screen.getByTestId(/operation/i);
    userEvent.type(op1, "5");
    userEvent.type(op2, "3");
    userEvent.click(operation);
    expect(screen.getByTestId("results")).toHaveTextContent("39.33333333333333");
  });

  it("should correctly execute TartagliaTriangle when called", () => {
    render(<MockedNavigation title="TartagliaTriangle" />);
    const op1 = screen.getByTestId(/operator1/i);
    const operation = screen.getByTestId(/operation/i);
    userEvent.type(op1, "5");
    userEvent.click(operation);
    expect(screen.getByTestId("results")).toHaveTextContent("1,1,1,1,2,1,1,3,3,1,1,4,6,4,1,1,5,10,10,5,1");
  });
});
