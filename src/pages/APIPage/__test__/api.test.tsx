import { fetchByCity, fetchByCityCountry } from "../api";
import apiRequest from "../../../../mocks/apiCall";
jest.mock("../../../../mocks/apiCall");

describe("Testing fetch REST API OpenWeatherMap by City", () => {
  it("should return an object with info about weather of the described city", async() => {
    const data = await fetchByCity("Bologna");
    expect(data.name).toBe("Bologna");
  });
  it("should return an object with info about weather of the described city, v2", async() => {
    const data = await fetchByCity("Milano");
    expect(data.name).not.toBe("Bologna");
  });
  it("should return an object with info about weather of the described city + country", async() => {
    const data = await fetchByCityCountry("Verona", "IT");
    expect(data.name).toBe("Provincia di Verona");
  });
  it("should return an object with info about weather of the described city + country, v2", async() => {
    const data = await fetchByCityCountry("Los Angeles", "US");
    expect(data.sys.country).toBe("US");
  });
});

describe("Testing a mock function call", () => {
  it("should return an expected value given a certain call to API if mocked correctly", async() => {
    const expectedValue = "Bologna";
    const mockResponse = {status: "mock", data: "Bologna"};
    apiRequest.mockResolvedValueOnce(mockResponse);
    const {data} = await apiRequest();
    expect(data).toEqual(expectedValue);
  })
})