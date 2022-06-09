export function getCountries(data: { countries: string[] }): string[] {
  if (data) {
    const { countries } = data;
    return countries;
  }
  return [];
}

export function getCities(data: { cities: string[] }): string[] {
  if (data) {
    const { cities } = data;
    return cities;
  }
  return [];
}

export function getCitiesOf(
  searchValue: string,
  data: { combos: { [name: string]: string[] } }
): string[] {
  const { combos } = data;
  if (Object.keys(combos).includes(searchValue)) return combos[searchValue];
  return [];
}

export function addCity(city: string, data: { cities: string[] }): void {
  data.cities.push(city);
}

export function modCityByName(
  oldCity: string,
  newCity: string,
  data: { cities: string[] }
): void {
  if (data.cities.includes(oldCity))
    data.cities[data.cities.indexOf(oldCity)] = newCity;
}

export function modCityByIndex(
  index: number,
  newCity: string,
  data: { cities: string[] }
): void {
  if (data.cities[index]) data.cities[index] = newCity;
}

export function removeCityByName(
  city: string,
  data: { cities: string[] }
): void {
  if (data.cities.includes(city))
    data.cities.splice(data.cities.indexOf(city), 1);
}

export function removeCityByIndex(
    index: number,
    data: { cities: string[] }
  ): void {
    if (data.cities[index])
      data.cities.splice(index, 1);
  }
