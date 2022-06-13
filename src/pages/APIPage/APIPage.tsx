import { useState } from "react";
import { fetchByCity, fetchByCityCountry } from "./api";
import "./style.css";
interface opProps {
  title: string;
}

const op: string[] = ["fetchByCity", "fetchByCityCountry"];

function CalcPage({ title }: opProps) {
  const [a, setA] = useState<string>("");
  const [b, setB] = useState<string>("");
  const [res, setRes] = useState<string>("");

  return (
    <>
      {op.includes(title) && (
        <div data-testid={title} className="apiDiv">
          <input
            data-testid="operator1"
            className="primInput"
            value={a}
            onChange={(event) => {
              setA(event.target.value);
            }}
            placeholder={"Insert first value..."}
          />
          {"fetchByCityCountry" === title && (
            <input
              data-testid="operator2"
              className="apiInput"
              value={b}
              onChange={(event) => {
                setB(event.target.value);
              }}
              placeholder={"Insert second value..."}
            />
          )}
          <div className="apiButton">
            <h1 className="apiLabel">
              {"fetchByCity" === title && (
                <label
                  data-testid="operation"
                  onClick={async () => setRes(await fetchByCity(a))}
                >
                  {"fetchByCity()"}
                </label>
              )}
              {"fetchByCityCountry" === title && (
                <label
                  data-testid="operation"
                  onClick={async () => setRes(await fetchByCityCountry(a, b))}
                >
                  {"fetchByCityCountry()"}
                </label>
              )}
            </h1>
          </div>
        </div>
      )}
      <div data-testid="results" className="apiResults">
        Results: {JSON.stringify(res)}
      </div>
    </>
  );
}

export default CalcPage;
