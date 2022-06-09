import { getCountries, getCities, getCitiesOf, addCity, modCityByName, modCityByIndex, removeCityByName, removeCityByIndex} from "../objects";

const data = {
  countries: ["Africa", "Argentina"],
  cities: [
    "Paris",
    "London",
    "NY",
    "San Francisco",
    "Bruxelles",
    "Los Angeles",
  ],
  combos: {
    America: ["Los Angeles", "San Francisco"],
    England: ["London", "Manchester"],
    Italy: ["Roma", "Milano", "Taranto", "Aosta", "Cagliari"],
  },
};

describe("Test extraction of elements from an object of various data", () => {
  it("should return the correct specified array of elements from the sample data countries", () => {
    expect(getCountries(data)).toEqual(["Africa", "Argentina"]);
  });
  it("should return the exact number of elements inside the array of the sample data countries", () => {
    expect(getCountries(data)).toHaveLength(2);
  });
  it("should return the exact number of elements inside the array of the sample data cities", () => {
    expect(getCities(data)).toHaveLength(6);
  });
  it("should return the array of cities corresponding to the country indicated", () => {
    expect(getCitiesOf("Italy", data)).toEqual([
      "Roma",
      "Milano",
      "Taranto",
      "Aosta",
      "Cagliari",
    ]);
  });
  it("should return an empty array if no cities are found for a specified key", () => {
    expect(getCitiesOf("Antartica", data)).toEqual([]);
  });
  it("should return the array of cities corresponding to the country indicated, v2", () => {
    expect(getCitiesOf("England", data)).not.toContain("Paris");
  });
  it("should return the array of cities corresponding to the country indicated, v3", () => {
    expect(getCitiesOf("America", data)[0] === "Los Angeles").toBeTruthy();
  });
});

describe("Test creation of a new element, then the correct retrieval", () => {
  let tmp = JSON.parse(JSON.stringify(data));
  it("should add a new city", () => {
    // copia oggetto
    addCity("Verona", tmp);
    expect(getCities(tmp)).toHaveLength(data.cities.length + 1);
  });
  it("should retrieve the new city correctly", () => {
    expect(getCities(tmp)).toContain("Verona");
  })
  it("should retrieve the new city correctly, v2", () => {
    addCity("Napoli", tmp);
    addCity("Firenze", tmp);
    addCity("Bologna", tmp);
    expect(getCities(tmp)).not.toContain("Venezia");
  })
  it("should have the correct new size", () => {
    expect(tmp.cities).toHaveLength(data.cities.length + 4);
  })
});

describe("Test modification of an element, then correct retrieval", () => {
  let tmp = JSON.parse(JSON.stringify(data));
  it("should modify an existing element to a new value by Name", () => {
    modCityByName("Paris", "Verona", tmp);
    expect(getCities(tmp)).toContain("Verona");
  });
  it("should modify an existing element to a new value by Index", () => {
    modCityByIndex(3, "Genova", tmp);
    expect(getCities(tmp)).toContain("Genova");
  });
})

describe("Test removal of an element, then verify the new length", () => {
  let tmp = JSON.parse(JSON.stringify(data));
  it("should remove an existing element from an array by Name", () => {
    removeCityByName("Paris", tmp);
    expect(getCities(tmp)).toHaveLength(data.cities.length - 1)
  });
  it("should remove an existing element from an array by Index", () => {
    removeCityByIndex(3, tmp);
    expect(getCities(tmp)).not.toContain("Bruxelles");
  });
})