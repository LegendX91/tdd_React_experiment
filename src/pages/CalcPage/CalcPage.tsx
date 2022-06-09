import { useState } from "react";
import { add, div, mkArray, mul, sub } from "./calculator";

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
        <div
          data-testid={title}
          className="calcDiv"
          style={{
            margin: "auto",
            width: "30%",
            border: "3px solid white",
            paddingTop: "auto",
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <input
            data-testid="operator1"
            style={{
              margin: "5px",
              borderRadius: "10px",
              textAlign: "center",
              verticalAlign: "middle",
            }}
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
            style={{
              margin: "5px",
              borderRadius: "10px",
              textAlign: "center",
              verticalAlign: "middle",
            }}
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
          <div
            style={{
              backgroundColor: "orange",
              margin: "auto",
              width: "20%",
              border: "3px solid white",
              padding: "10px",
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              borderRadius: "10px",
            }}
          >
            <h1
              style={{
                textAlign: "center",
                fontSize: "20px",
                color: "white",
                fontWeight: "bolder",
              }}
            >
              {"Addition".startsWith(title) && (
                <label
                  data-testid="operation"
                  onClick={() => setRes(add(a, b))}
                >
                  {" "}
                  {"add()"}{" "}
                </label>
              )}
              {"Subtraction".startsWith(title) && (
                <label
                  data-testid="operation"
                  onClick={() => setRes(sub(a, b))}
                >
                  {" "}
                  {"sub()"}{" "}
                </label>
              )}
              {"Multiplication".startsWith(title) && (
                <label
                  data-testid="operation"
                  onClick={() => setRes(mul(a, b))}
                >
                  {" "}
                  {"mul()"}{" "}
                </label>
              )}
              {"Division".startsWith(title) && (
                <label
                  data-testid="operation"
                  onClick={() => setRes(div(a, b))}
                >
                  {" "}
                  {"div()"}{" "}
                </label>
              )}
            </h1>
          </div>
        </div>
      )}
      {title === "MakeRandomArray" && (
        <div
          data-testid={title}
          className="calcDiv"
          style={{
            margin: "auto",
            width: "30%",
            border: "3px solid white",
            paddingTop: "auto",
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <input
            data-testid="operator1"
            style={{
              margin: "5px",
              borderRadius: "10px",
              textAlign: "center",
              verticalAlign: "middle",
            }}
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
          <div
            style={{
              backgroundColor: "orange",
              margin: "auto",
              width: "20%",
              border: "3px solid white",
              padding: "10px",
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              borderRadius: "10px",
            }}
          >
            <h1
              style={{
                textAlign: "center",
                fontSize: "20px",
                color: "white",
                fontWeight: "bolder",
              }}
            >
              <label data-testid="operation" onClick={() => setRes(mkArray(a))}> {"mkArray()"} </label>
            </h1>
          </div>
        </div>
      )}
      <div
        data-testid="results"
        style={{
          backgroundColor: "orange",
          margin: "auto",
          width: "fit-content",
          height: "fit-content",
          border: "3px solid white",
          padding: "10px",
          display: "display-inside",
          justifyContent: "center",
          alignContent: "center",
          borderRadius: "10px",
          color: "white",
          fontWeight: "bold",
          fontSize: "20px",
          wordWrap: "break-word",
          textAlign: "center",
        }}
      >
        Results: {res.toString()}
      </div>
    </>
  );
}

export default CalcPage;
