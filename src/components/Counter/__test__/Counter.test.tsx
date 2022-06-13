import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "../Counter";

describe("Testing the general rendering of the Counter component", () => {
  it("should render the main div", () => {
    render(<Counter />);
    expect(screen.getByTestId("counterDiv")).toBeInTheDocument();
  });
});

describe("Testing functions of Counter component", () => {
  it("should duplicate the counter value", () => {
    render(<Counter />);
    const random = Math.floor(Math.random() * 100);
    for (let i = 0; i < random; i++) fireEvent.click(screen.getByTestId("add"));
    fireEvent.click(screen.getByTestId("duplicate"));
    expect(screen.getByTestId("counter")).toHaveTextContent(
      `Counter: ${random * 2}`
    );
  });

  it("should triplicate the counter value", () => {
    render(<Counter />);
    const random = Math.floor(Math.random() * 100);
    for (let i = 0; i < random; i++) fireEvent.click(screen.getByTestId("sub"));
    fireEvent.click(screen.getByTestId("triplicate"));
    expect(screen.getByTestId("counter")).toHaveTextContent(
      `Counter: ${- random * 2 * 2}`
    );
  });

  it("should halve the counter value", () => {
    render(<Counter />);
    for (let i = 0; i < 10; i++) {
      fireEvent.click(screen.getByTestId("add"));
    }
    fireEvent.click(screen.getByTestId("halve"));
    expect(screen.getByTestId("counter")).toHaveTextContent("Counter: 5");
  });

  it("should reverse the counter value", () => {
    render(<Counter />);
    const random = Math.floor(Math.random() * 100);
    for (let i = 0; i < random; i++) fireEvent.click(screen.getByTestId("add"));
    fireEvent.click(screen.getByTestId("reverse"));
    expect(screen.getByTestId("counter")).toHaveTextContent(
      `Counter: ${0 - random}`
    );
  });
});
