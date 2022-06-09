const appid = "&appid=10264219b5abd57b583acb05ecceba1b";
const url = "https://api.openweathermap.org/data/2.5/weather?q=";
const fetch = require("node-fetch");

export async function fetchByCity(city: string) {
  try {
    const response = await fetch(url + city + appid);
    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`);
    }
    const result = await response.json();
    return result;
  } catch (err) {
    throw new Error(`Error! status: internal error`);
  }
}

export async function fetchByCityCountry(city: string, country: string) {
  try {
    const response = await fetch(url + city + "," + country + appid);
    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`);
    }
    const result = await response.json();
    return result;
  } catch (err) {
    throw new Error(`Error! status: internal error`);
  }
}
