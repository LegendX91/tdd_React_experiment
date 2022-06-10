import { useEffect, useState } from "react";
import {
  addCity,
  getCities,
  getCitiesOf,
  getCountries,
  modCityByIndex,
  modCityByName,
  objType,
  removeCityByIndex,
  removeCityByName,
} from "./objects";
import "./style.css";

import data from "./data/data";

interface opProps {
  title: string;
}

const op: string[] = [
  "getCountry",
  "getCities",
  "getCitiesOf",
  "addCity",
  "modCityByName",
  "modCityByIndex",
  "removeCityByName",
  "removeCityByIndex",
];

function ObjPage({ title }: opProps) {
  const [element, setElement] = useState<string>("");
  const [elementToChange, setElementToChange] = useState<string>("");
  const [backData, setBackData] = useState<objType>(data);
  const [res, setRes] = useState<string[]>([""]);

  useEffect(() => {}, [backData]);

  return (
    <>
      {op.includes(title) && (
        <div data-testid={title} className="primDiv">
          {("modCityByName" === title || "modCityByIndex" === title) && (
            <input
              data-testid="operator2"
              className="objInput"
              value={elementToChange}
              onChange={(event) => {
                try {
                  setElementToChange(event.target.value);
                } catch (e) {
                  console.warn("Error!");
                }
              }}
              placeholder={"New Element?"}
            />
          )}
          {"getCountry" !== title && "getCities" !== title && (
            <input
              data-testid="operator1"
              className="objInput"
              value={element}
              onChange={(event) => {
                try {
                  setElement(event.target.value);
                } catch (e) {
                  console.warn("Error!");
                }
              }}
              placeholder={"Insert...?"}
            />
          )}
          <div className="objButton">
            <h1 className="objLabel">
              {"getCountry" === title && (
                <label
                  data-testid="operation"
                  onClick={() => setRes(getCountries(backData))}
                >
                  {"getCountry()"}
                </label>
              )}
              {"getCities" === title && (
                <label
                  data-testid="operation"
                  onClick={() => setRes(getCities(backData))}
                >
                  {"getCities()"}
                </label>
              )}
              {"getCitiesOf" === title && (
                <label
                  data-testid="operation"
                  onClick={() => setRes(getCitiesOf(element, backData))}
                >
                  {"getCitiesOf()"}
                </label>
              )}
              {"addCity" === title && (
                <label
                  data-testid="operation"
                  onClick={() => {
                    setBackData(addCity(element, data));
                    setRes(backData.cities);
                  }}
                >
                  {"getCitiesOf()"}
                </label>
              )}
              {"modCityByName" === title && (
                <label
                  data-testid="operation"
                  onClick={() => {
                    setBackData(modCityByName(element, elementToChange, data));
                    setRes(backData.cities);
                  }}
                >
                  {"modCityByName()"}
                </label>
              )}
              {"modCityByIndex" === title && (
                <label
                  data-testid="operation"
                  onClick={() => {
                    setBackData(modCityByIndex(Number.parseFloat(element), elementToChange, data));
                    setRes(backData.cities);
                  }}
                >
                  {"modCityByIndex()"}
                </label>
              )}
              {"removeCityByName" === title && (
                <label
                  data-testid="operation"
                  onClick={() => {
                    setBackData(removeCityByName(element, data));
                    setRes(backData.cities);
                  }}
                >
                  {"removeCityByName()"}
                </label>
              )}
              {"removeCityByIndex" === title && (
                <label
                  data-testid="operation"
                  onClick={() => {
                    setBackData(removeCityByIndex(Number.parseFloat(element), data));
                    setRes(backData.cities);
                  }}
                >
                  {"modCityByIndex()"}
                </label>
              )}
            </h1>
          </div>
        </div>
      )}
      <div data-testid="results" className="objResults">
        Results: {"[ " + res.toString() + " ]"}
      </div>
    </>
  );
}

export default ObjPage;
