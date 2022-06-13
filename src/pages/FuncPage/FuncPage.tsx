import { useContext, useState } from "react";
import { Counter } from "../../components/Counter/Counter";
import { LoginContext } from "../../Helpers/LoginContext";
import { exponential, factorial, tartaglia, taylor } from "./problems";
import "./style.css";
interface opProps {
  title: string;
}

const op: string[] = [
  "Factorial",
  "Exponential",
  "TaylorSeries",
  "TartagliaTriangle",
];

function FuncPage({ title }: opProps) {
  const [a, setA] = useState<number>(0);
  const [b, setB] = useState<number>(0);
  const [res, setRes] = useState<number | string | number[] | number[][]>(0);

  const { loggedIn, setLoggedIn } = useContext(LoginContext);

  if (!loggedIn) {
    return (
      <p
        style={{
          textAlign: "center",
          color: "red",
          fontStyle: "italic",
          fontWeight: "bolder",
        }}
      >
        WARING! You need to be Authenticated in order to see this section!
      </p>
    );
  } else if (title === "Counter") {
    return (
      <Counter
        backgroundColor="#dbba79"
        borderColor="#ffffff"
        borderRadius={5}
        color="#ffffff"
        fontSize={23}
        fontStyle="Italic"
        fontWeight="bolder"
        marginLeft={20}
      />
    );
  } else
    return (
      <>
        {op.includes(title) && (
          <div data-testid={title} className="funcDiv">
            <input
              data-testid="operator1"
              type="number"
              className="funcInput"
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
            {"Factorial" !== title && "TartagliaTriangle" !== title && (
              <input
                data-testid="operator2"
                type="number"
                className="funcInput"
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
            )}
            <div className="funcButton">
              <h1 className="funcLabel">
                {"Factorial".startsWith(title) && (
                  <label
                    data-testid="operation"
                    onClick={() => setRes(factorial(a))}
                  >
                    {"factorial()"}
                  </label>
                )}
                {"Exponential".startsWith(title) && (
                  <label
                    data-testid="operation"
                    onClick={() => setRes(exponential(a, b))}
                  >
                    {"exponential()"}
                  </label>
                )}
                {"TaylorSeries".startsWith(title) && (
                  <label
                    data-testid="operation"
                    onClick={() => setRes(taylor(a, b))}
                  >
                    {"taylor()"}
                  </label>
                )}
                {"TartagliaTriangle".startsWith(title) && (
                  <label
                    data-testid="operation"
                    onClick={() => setRes(tartaglia(a))}
                  >
                    {"tartaglia()"}
                  </label>
                )}
              </h1>
            </div>
          </div>
        )}
        <div data-testid="results" className="funcResults">
          Results: {res.toString()}
        </div>
      </>
    );
}

export default FuncPage;
