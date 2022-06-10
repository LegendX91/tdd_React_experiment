import "./App.css";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import TestPage from "./pages/TestPage/TestPage";
import CalcPage from "./pages/CalcPage/CalcPage";
import ObjPage from "./pages/ObjPage/ObjPage";

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

            {/* Path to Inner Specific Pages */}

            <Route
              path={`/${data[0]}/Addition`}
              element={<CalcPage title="Addition" />}
            ></Route>
            <Route
              path={`/${data[0]}/Subtraction`}
              element={<CalcPage title="Subtraction" />}
            ></Route>
            <Route
              path={`/${data[0]}/Multiplication`}
              element={<CalcPage title="Multiplication" />}
            ></Route>
            <Route
              path={`/${data[0]}/Division`}
              element={<CalcPage title="Division" />}
            ></Route>
            <Route
              path={`/${data[0]}/MakeRandomArray`}
              element={<CalcPage title="MakeRandomArray" />}
            ></Route>

            <Route
              path={`/${data[1]}/getCountry`}
              element={<ObjPage title="getCountry" />}
            ></Route>
            <Route
              path={`/${data[1]}/getCities`}
              element={<ObjPage title="getCities" />}
            ></Route>
            <Route
              path={`/${data[1]}/getCitiesOf`}
              element={<ObjPage title="getCitiesOf" />}
            ></Route>
            <Route
              path={`/${data[1]}/addCity`}
              element={<ObjPage title="addCity" />}
            ></Route>
            <Route
              path={`/${data[1]}/modCityByName`}
              element={<ObjPage title="modCityByName" />}
            ></Route>
            <Route
              path={`/${data[1]}/modCityByIndex`}
              element={<ObjPage title="modCityByIndex" />}
            ></Route>
            <Route
              path={`/${data[1]}/removeCityByName`}
              element={<ObjPage title="removeCityByName" />}
            ></Route>
            <Route
              path={`/${data[1]}/removeCityByIndex`}
              element={<ObjPage title="removeCityByIndex" />}
            ></Route>

            <Route path={`/`} element={<h1></h1>}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
