import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import Header from "./components/Header/Header";

describe("Testing the general rendering of the main App", () => {
  it("should render the main div", () => {
    render(<App />);
    const mainDiv = screen.getByTestId("mainDiv");
    expect(mainDiv).toBeInTheDocument();
  });
  it("should render the header", () => {
    render(<Header />);
    const header = screen.getByTestId("header");
    expect(header).toBeInTheDocument();
  });
});
