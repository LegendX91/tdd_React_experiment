import { useState } from "react";
import { add, div, mkArray, mul, sub } from "./calculator";
import "./style.css";
interface opProps {
  title: string;
}

const op: string[] = ["Addition", "Subtraction", "Multiplication", "Division"];

function CalcPage({ title }: opProps) {
  const [a, setA] = useState<number>(0);
  const [b, setB] = useState<number>(0);
  const [res, setRes] = useState<number | string | number[]>(0);

  return (
    <>
      {op.includes(title) && (
        <div data-testid={title} className="primDiv">
          <input
            data-testid="operator1"
            className="primInput"
            type="number"
            value={a}
            onChange={(event) => {
              try {
                setA(Number.parseFloat(event.target.value));
              } catch (e) {
                console.warn("Error!");
              }
            }}
            placeholder={"Insert first value..."}
          />
          <input
            data-testid="operator2"
            className="primInput"
            type="number"
            value={b}
            onChange={(event) => {
              try {
                setB(Number.parseFloat(event.target.value));
              } catch (e) {
                console.warn("Error!");
              }
            }}
            placeholder={"Insert second value..."}
          />
          <div className="primButton">
            <h1 className="primLabel">
              {"Addition".startsWith(title) && (
                <label
                  data-testid="operation"
                  onClick={() => setRes(add(a, b))}
                >
                  {"add()"}
                </label>
              )}
              {"Subtraction".startsWith(title) && (
                <label
                  data-testid="operation"
                  onClick={() => setRes(sub(a, b))}
                >
                  {"sub()"}
                </label>
              )}
              {"Multiplication".startsWith(title) && (
                <label
                  data-testid="operation"
                  onClick={() => setRes(mul(a, b))}
                >
                  {"mul()"}
                </label>
              )}
              {"Division".startsWith(title) && (
                <label
                  data-testid="operation"
                  onClick={() => setRes(div(a, b))}
                >
                  {"div()"}
                </label>
              )}
            </h1>
          </div>
        </div>
      )}
      {title === "MakeRandomArray" && (
        <div data-testid={title} className="primDiv">
          <input
            data-testid="operator1"
            className="primInput"
            value={a}
            onChange={(event) => {
              try {
                setA(Number.parseFloat(event.target.value));
              } catch (e) {
                console.warn("Error!");
              }
            }}
            placeholder={"Insert value..."}
          />
          <div className="primButton">
            <h1 className="primLabel">
              <label data-testid="operation" onClick={() => setRes(mkArray(a))}>
                {"mkArray()"}
              </label>
            </h1>
          </div>
        </div>
      )}
      <div
        data-testid="results"
        className="primResults"
      >
        Results: {res.toString()}
      </div>
    </>
  );
}

export default CalcPage;
