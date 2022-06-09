import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <div className="App" data-testid="mainDiv">
      <Header />
      <Router>
        <div className="Router" data-testid="router">
          <Navigation />
          <Routes>
            <Route path={"/pet-details-not-found"}></Route>
            <Route path={"/search"}></Route>
            <Route path={"/:type/:id"}></Route>
            <Route path={"/:type?"}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
