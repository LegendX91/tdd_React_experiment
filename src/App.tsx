import "./App.css";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import TestPage from "./pages/TestPage/TestPage";
import CalcPage from "./pages/CalcPage/CalcPage";
import ObjPage from "./pages/ObjPage/ObjPage";
import mathImg from "./assets/images/math.jpg";
import objImg from "./assets/images/cities.jpg";
import apiImg from "./assets/images/api.jpg";
import probImg from "./assets/images/complex.jpg";
import FuncPage from "./pages/FuncPage/FuncPage";
import APIPage from "./pages/APIPage/APIPage";
import { LoginContext } from "./Helpers/LoginContext";
import { useState } from "react";

const data = ["Primitives", "Objects", "API", "Problems"];

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <LoginContext.Provider value={{ loggedIn, setLoggedIn }}>
      <div className="App" data-testid="mainDiv">
        <Header
          backgroundColor="#a28818"
          borderColor="#ffffff"
          borderRadius={9}
          color="#ffffff"
          fontSize={18}
          marginTop={10}
        />
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
                        image: mathImg,
                        description: "Normal arithmetical operation",
                      },
                      {
                        name: "Subtraction",
                        image: mathImg,
                        description: "Normal arithmetical operation",
                      },
                      {
                        name: "Multiplication",
                        image: mathImg,
                        description: "Normal arithmetical operation",
                      },
                      {
                        name: "Division",
                        image: mathImg,
                        description: "Normal arithmetical operation",
                      },
                      {
                        name: "MakeRandomArray",
                        image: mathImg,
                        description:
                          "Create a random array, ascending ordered, of n-input'd elements",
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
                        image: objImg,
                        description: "get a Country from provided data",
                      },
                      {
                        name: "getCities",
                        image: objImg,
                        description: "get a City from provided data",
                      },
                      {
                        name: "getCitiesOf",
                        image: objImg,
                        description:
                          "get all Cities of Country from provided data",
                      },
                      {
                        name: "addCity",
                        image: objImg,
                        description: "add a new city to data",
                      },
                      {
                        name: "modCityByName",
                        image: objImg,
                        description:
                          "add a new city changing previous one by his own name in data",
                      },
                      {
                        name: "modCityByIndex",
                        image: objImg,
                        description:
                          "add a new city changing previous one by his own index in data",
                      },
                      {
                        name: "removeCityByName",
                        image: objImg,
                        description: "remove a city by his own name in data",
                      },
                      {
                        name: "removeCityByIndex",
                        image: objImg,
                        description: "remove a city by his own index in data",
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
                        image: apiImg,
                        description:
                          "fetch local weather from OpenWeatherMap by City",
                      },
                      {
                        name: "fetchByCityCountry",
                        image: apiImg,
                        description:
                          "fetch local weather from OpenWeatherMap by City and Country",
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
                        image: probImg,
                        description: "Calculate a factorial of a given number",
                      },
                      {
                        name: "Exponential",
                        image: probImg,
                        description:
                          "Find the exponential value of provided numbers",
                      },
                      {
                        name: "TaylorSeries",
                        image: probImg,
                        description: "Calculate a Taylor Series",
                      },
                      {
                        name: "TartagliaTriangle",
                        image: probImg,
                        description:
                          "Create a Tartaglia's Triangle from an input'd size",
                      },
                      {
                        name: "Counter",
                        image: probImg,
                        description:
                          "Use a Counter made with useReducer() in React",
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

              <Route
                path={`/${data[2]}/fetchByCity`}
                element={<APIPage title="fetchByCity" />}
              ></Route>
              <Route
                path={`/${data[2]}/fetchByCityCountry`}
                element={<APIPage title="fetchByCityCountry" />}
              ></Route>

              <Route
                path={`/${data[3]}/Factorial`}
                element={<FuncPage title="Factorial" />}
              ></Route>
              <Route
                path={`/${data[3]}/Exponential`}
                element={<FuncPage title="Exponential" />}
              ></Route>
              <Route
                path={`/${data[3]}/TaylorSeries`}
                element={<FuncPage title="TaylorSeries" />}
              ></Route>
              <Route
                path={`/${data[3]}/TartagliaTriangle`}
                element={<FuncPage title="TartagliaTriangle" />}
              ></Route>
              <Route
                path={`/${data[3]}/Counter`}
                element={<FuncPage title="Counter" />}
              ></Route>

              <Route path={`/`} element={<h1></h1>}></Route>
            </Routes>
          </div>
        </Router>
      </div>
    </LoginContext.Provider>
  );
}

export default App;
