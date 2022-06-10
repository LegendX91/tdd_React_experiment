import { useState } from "react";
import { getCities, getCitiesOf, getCountries } from "./objects";
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
  "moCityByIndex",
  "removeCityByName",
  "removeCityByIndex",
];

function ObjPage({ title }: opProps) {
  const [element, setElement] = useState<string>("");
  const [res, setRes] = useState<string[]>([""]);

  return (
    <>
      {op.includes(title) && (
        <div data-testid={title} className="primDiv">
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
              placeholder={"What do you want to retrieve?"}
            />
          )}
          <div className="objButton">
            <h1 className="objLabel">
              {"getCountry" === title && (
                <label
                  data-testid="operation"
                  onClick={() => setRes(getCountries(data))}
                >
                  {"getCountry()"}
                </label>
              )}
              {"getCities" === title && (
                <label
                  data-testid="operation"
                  onClick={() => setRes(getCities(data))}
                >
                  {"getCities()"}
                </label>
              )}
              {"getCitiesOf" === title && (
                <label
                  data-testid="operation"
                  onClick={() => setRes(getCitiesOf(element, data))}
                >
                  {"getCitiesOf()"}
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
