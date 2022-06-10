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

  it("should render an input component in getCitiesOf", () => {
    render(<MockedNavigation title="getCitiesOf" />);
    expect(screen.getByTestId("operator1")).toBeInTheDocument();
    expect(screen.queryByTestId("operator2")).not.toBeInTheDocument();
  });

  it("should render an input component in addCity", () => {
    render(<MockedNavigation title="addCity" />);
    expect(screen.getByTestId("operator1")).toBeInTheDocument();
    expect(screen.queryByTestId("operator2")).not.toBeInTheDocument();
  });

  it("should render two input component in modCityByName", () => {
    render(<MockedNavigation title="modCityByName" />);
    expect(screen.getByTestId("operator1")).toBeInTheDocument();
    expect(screen.getByTestId("operator2")).toBeInTheDocument();
  });

  it("should render two input component in modCityByIndex", () => {
    render(<MockedNavigation title="modCityByIndex" />);
    expect(screen.getByTestId("operator1")).toBeInTheDocument();
    expect(screen.getByTestId("operator2")).toBeInTheDocument();
  });

  it("should render an input component in removeCityByName", () => {
    render(<MockedNavigation title="removeCityByName" />);
    expect(screen.getByTestId("operator1")).toBeInTheDocument();
    expect(screen.queryByTestId("operator2")).not.toBeInTheDocument();
  });

  it("should render an input component in removeCityByIndex", () => {
    render(<MockedNavigation title="removeCityByIndex" />);
    expect(screen.getByTestId("operator1")).toBeInTheDocument();
    expect(screen.queryByTestId("operator2")).not.toBeInTheDocument();
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

  it("should correctly execute getCitiesOf() when called", () => {
    render(<MockedNavigation title="getCitiesOf" />);
    userEvent.type(screen.getByTestId("operator1"), "America");
    const operation = screen.getByTestId(/operation/i);
    userEvent.click(operation);
    expect(screen.getByTestId("results")).toHaveTextContent("New York");
  });

  it("should correctly execute addCity() when called", () => {
    render(<MockedNavigation title="addCity" />);
    userEvent.type(screen.getByTestId("operator1"), "Miami");
    const operation = screen.getByTestId(/operation/i);
    userEvent.click(operation);
    expect(screen.getByTestId("results")).toHaveTextContent("Miami ]");
  });

  it("should correctly execute modCityByName() when called", () => {
    render(<MockedNavigation title="modCityByName" />);
    userEvent.type(screen.getByTestId("operator1"), "London");
    userEvent.type(screen.getByTestId("operator2"), "Miami");
    const operation = screen.getByTestId(/operation/i);
    userEvent.click(operation);
    expect(screen.getByTestId("results")).toHaveTextContent(",Miami,");
  });

  it("should correctly execute modCityByIndex() when called", () => {
    render(<MockedNavigation title="modCityByIndex" />);
    userEvent.type(screen.getByTestId("operator1"), "Miami");
    userEvent.type(screen.getByTestId("operator2"), "2");
    const operation = screen.getByTestId(/operation/i);
    userEvent.click(operation);
    expect(screen.getByTestId("results")).toHaveTextContent(",Miami,");
  });

  it("should correctly execute removeCityByName() when called", () => {
    render(<MockedNavigation title="removeCityByName" />);
    userEvent.type(screen.getByTestId("operator1"), "Vancouver");
    const operation = screen.getByTestId(/operation/i);
    userEvent.click(operation);
    expect(screen.getByTestId("results")).toHaveTextContent("Miami ]");
  });

  it("should correctly execute removeCityByIndex() when called", () => {
    render(<MockedNavigation title="removeCityByIndex" />);
    userEvent.type(screen.getByTestId("operator1"), "2");
    const operation = screen.getByTestId(/operation/i);
    userEvent.click(operation);
    expect(screen.queryByTestId("results")).not.toHaveTextContent(",Vancouver,");
  });
});
