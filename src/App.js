import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Popup from "./components/Popup/Popup";
import TableInfo from "./components/Table/Table";

const App = () => {
  return (
    <div className="App">
      <div className="container">
        <Routes>
          <Route path="/" element={<TableInfo />} />
          <Route path="/popup" element={<Popup />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
