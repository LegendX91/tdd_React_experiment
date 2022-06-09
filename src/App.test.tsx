import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import Header from "./components/Header/Header";

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
  it("should render the Calculator component following the click of corresponding navLink", () => {
    render(<App />);
    const el0 = screen.getByTestId("navTo0");
    fireEvent.click(el0);
    expect(screen.getByTestId("Calculator")).toBeInTheDocument();
  })
})
