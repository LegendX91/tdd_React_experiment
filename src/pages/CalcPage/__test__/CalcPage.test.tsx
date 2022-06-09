import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import CalcPage from "../CalcPage";

interface mockProps {
  title: string;
}

const MockedNavigation = ({ title }: mockProps) => {
  return (
    <BrowserRouter>
      <CalcPage title={title} />
    </BrowserRouter>
  );
};

describe("Testing the general rendering of the CalcPage component", () => {
  it("should render page containing the right operation associated", () => {
    render(<MockedNavigation title="Addition" />);
    const element = screen.getByTestId(/Addition/i);
    expect(element).toBeInTheDocument();
  });
});

describe("Testing the inner called function correct invcation and results", () => {
  it("should correctly execute Addition when called", () => {
    render(<MockedNavigation title="Addition" />);
    const op1 = screen.getByTestId(/operator1/i);
    const op2 = screen.getByTestId(/operator2/i);
    const operation = screen.getByTestId(/operation/i);
    userEvent.type(op1, "5");
    userEvent.type(op2, "32");
    userEvent.click(operation);
    expect(screen.getByTestId("results")).toHaveTextContent("37");
  });

  it("should correctly execute Subtraction when called", () => {
    render(<MockedNavigation title="Subtraction" />);
    const op1 = screen.getByTestId(/operator1/i);
    const op2 = screen.getByTestId(/operator2/i);
    const operation = screen.getByTestId(/operation/i);
    userEvent.type(op1, "5");
    userEvent.type(op2, "32");
    userEvent.click(operation);
    expect(screen.getByTestId("results")).toHaveTextContent("-27");
  });

  it("should correctly execute Multiplication when called", () => {
    render(<MockedNavigation title="Multiplication" />);
    const op1 = screen.getByTestId(/operator1/i);
    const op2 = screen.getByTestId(/operator2/i);
    const operation = screen.getByTestId(/operation/i);
    userEvent.type(op1, "5");
    userEvent.type(op2, "32");
    userEvent.click(operation);
    expect(screen.getByTestId("results")).toHaveTextContent("160");
  });

  it("should correctly execute Division when called", () => {
    render(<MockedNavigation title="Division" />);
    const op1 = screen.getByTestId(/operator1/i);
    const op2 = screen.getByTestId(/operator2/i);
    const operation = screen.getByTestId(/operation/i);
    userEvent.type(op1, "5");
    userEvent.type(op2, "32");
    userEvent.click(operation);
    expect(screen.getByTestId("results")).toHaveTextContent("0.156");
  });

  it("should correctly execute Make Random Array when called", () => {
    render(<MockedNavigation title="MakeRandomArray" />);
    const op1 = screen.getByTestId(/operator1/i);
    const operation = screen.getByTestId(/operation/i);
    userEvent.type(op1, "5");
    userEvent.click(operation);
    expect(screen.getByTestId("results")).not.toContain(/,/i);
  });
});
