export interface objType {
  countries: string[];
  cities: string[];
  combos: {
    [name: string]: string[];
  };
}

export function getCountries(data: objType): string[] {
  if (data) {
    const { countries } = data;
    return countries;
  }
  return [];
}

export function getCities(data: objType): string[] {
  if (data) {
    return data.cities;
  }
  return [];
}

export function getCitiesOf(searchValue: string, data: objType): string[] {
  const { combos } = data;
  if (Object.keys(combos).includes(searchValue)) return combos[searchValue];
  return [];
}

export function addCity(city: string, data: objType) {
  data.cities.push(city);
  return data;
}

export function modCityByName(
  oldCity: string,
  newCity: string,
  data: objType
): objType {
  if (data.cities.includes(oldCity))
    data.cities[data.cities.indexOf(oldCity)] = newCity;
  return data;
}

export function modCityByIndex(
  index: number,
  newCity: string,
  data: objType
): objType {
  if (data.cities[index]) data.cities[index] = newCity;
  return data;
}

export function removeCityByName(city: string, data: objType): objType {
  if (data.cities.includes(city))
    data.cities.splice(data.cities.indexOf(city), 1);

  return data;
}

export function removeCityByIndex(index: number, data: objType): objType {
  if (data.cities[index]) data.cities.splice(index, 1);
  return data;
}
