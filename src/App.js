import React, { useEffect } from "react";

import "./App.scss";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Boost from "./components/Boost";
import InfoAndSkins from "./components/InfoAndSkins";

function App() {
  const darkMode = useSelector((state) => state.darkMode);

  const body = () => {
    document.body.style.background = darkMode ? "#222" : "white";
    document.body.style.transition = "1s";
  };

  useEffect(() => {
    body();
  }, [darkMode]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/boost" element={<Boost />} />
        <Route path="/skins" element={<InfoAndSkins />} />
      </Routes>
    </div>
  );
}

export default App;
