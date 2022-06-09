import "./App.css";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import TestPage from "./pages/TestPage/TestPage";

const data = ["Primitives", "Objects", "API", "Problems"];

function App() {
  return (
    <div className="App" data-testid="mainDiv">
      <Header />
      <Router>
        <div className="Router" data-testid="router">
          <Navigation elements={data} />
          <Routes>
            <Route
              path={`/${data[0]}`}
              element={
                <TestPage
                  elements={[
                    {
                      name: "Addition",
                      image: "test",
                      description: "Normal arithmetical operation",
                    },
                    {
                      name: "Subtraction",
                      image: "test",
                      description: "Normal arithmetical operation",
                    },
                    {
                      name: "Multiplication",
                      image: "test",
                      description: "Normal arithmetical operation",
                    },
                    {
                      name: "Division",
                      image: "test",
                      description: "Normal arithmetical operation",
                    },
                    {
                      name: "MakeRandomArray",
                      image: "test",
                      description: "lorem ipsum",
                    },
                  ]}
                  title={data[0]}
                />
              }
            ></Route>
            <Route
              path={`/${data[1]}`}
              element={
                <TestPage
                  elements={[
                    {
                      name: "getCountry",
                      image: "test",
                      description: "lorem ipsum",
                    },
                    {
                      name: "getCities",
                      image: "test",
                      description: "lorem ipsum",
                    },
                    {
                      name: "getCitiesOf",
                      image: "test",
                      description: "lorem ipsum",
                    },
                    {
                      name: "addCity",
                      image: "test",
                      description: "lorem ipsum",
                    },
                    {
                      name: "modCityByName",
                      image: "test",
                      description: "lorem ipsum",
                    },
                    {
                      name: "modCityByIndex",
                      image: "test",
                      description: "lorem ipsum",
                    },
                    {
                      name: "removeCityByName",
                      image: "test",
                      description: "lorem ipsum",
                    },
                    {
                      name: "removeCityByIndex",
                      image: "test",
                      description: "lorem ipsum",
                    },
                  ]}
                  title={data[1]}
                />
              }
            ></Route>
            <Route
              path={`/${data[2]}`}
              element={
                <TestPage
                  elements={[
                    {
                      name: "fetchByCity",
                      image: "test",
                      description: "lorem ipsum",
                    },
                    {
                      name: "fetchByCityCountry",
                      image: "test",
                      description: "lorem ipsum",
                    },
                  ]}
                  title={data[2]}
                />
              }
            ></Route>
            <Route
              path={`/${data[3]}`}
              element={
                <TestPage
                  elements={[
                    {
                      name: "Factorial",
                      image: "test",
                      description: "lorem ipsum",
                    },
                    {
                      name: "Exponential",
                      image: "test",
                      description: "lorem ipsum",
                    },
                    {
                      name: "TaylorSeries",
                      image: "test",
                      description: "lorem ipsum",
                    },
                    {
                      name: "TartagliaPyramid",
                      image: "test",
                      description: "lorem ipsum",
                    },
                  ]}
                  title={data[3]}
                />
              }
            ></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
