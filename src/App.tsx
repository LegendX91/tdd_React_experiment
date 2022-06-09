import "./App.css";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import TestPage from "./pages/TestPage/TestPage";

function App() {
  return (
    <div className="App" data-testid="mainDiv">
      <Header />
      <Router>
        <div className="Router" data-testid="router">
          <Navigation elements={["Calculator", "Problems", "API", "Complex"]} />
          <Routes>
            <Route
              path={"/Calculator"}
              element={
                <TestPage
                  elements={[
                    { name: "test", image: "test", description: "lorem ipsum" },
                  ]}
                  title={"Calculator"}
                />
              }
            ></Route>
            <Route path={"/Problems"}></Route>
            <Route path={"/API"}></Route>
            <Route path={"/Complex"}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
