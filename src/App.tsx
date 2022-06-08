import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Testing from "./pages/testing";
import Asdf from "./pages/asdf";

function App() {
  return (
    <div
      style={{ display: "flex", height: "100vh", width: "100%" }}
      className="App"
    >
      <div style={{ width: "15%", backgroundColor: "#FFFFFF" }}></div>
      <div style={{ width: "85%", background: "#AAAAAA" }}>
        <header style={{ height: "10vh", backgroundColor: "white" }}>
          asdf
        </header>
        <Link to="/">main</Link>
        <Link to="/testing">main</Link>
        <Link to="/asdf">main</Link>
        <Routes>
          <Route path="/testing" element={<Testing />}></Route>
          <Route path="/asdf" element={<Asdf />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
