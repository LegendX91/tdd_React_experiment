import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

describe("Testing the general rendering of the main App", () => {
  it("should render the main div", () => {
    render(<App />);
    const mainDiv = screen.getByTestId("mainDiv");
    expect(mainDiv).toBeInTheDocument();
  });
  it("should render the header", () => {
    render(<App />);
    const header = screen.getByTestId("header");
    expect(header).toBeInTheDocument();
  });
  it("should render the router", () => {
    render(<App />);
    const router = screen.getByTestId("router");
    expect(router).toBeInTheDocument();
  });
  it("should render the navigation component", () => {
    render(<App />);
    const navigation = screen.getByTestId("navigation");
    expect(navigation).toBeInTheDocument();
  });
});


//Integration Tests

describe("Testing the correct routing of default options", () =>{
  it("should render the TestPage component following the click of corresponding navLink", () => {
    render(<App />);
    const el0 = screen.getByTestId("navTo0");
    fireEvent.click(el0);
    expect(screen.getByTestId("Primitives")).toBeInTheDocument();
  });
  it("should render the CalcPage component following the click of corresponding Link inside Primitives page", () => {
    render(<App />);
    const el0 = screen.getByTestId("navTo0");
    fireEvent.click(el0);
    const innerEl = screen.getByTestId("innerNavEl0");
    fireEvent.click(innerEl);
    expect(screen.getByTestId("Addition")).toBeInTheDocument();
  })
})
