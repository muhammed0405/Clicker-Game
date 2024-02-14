import React from "react";
import "./style.scss";
import InfoAndSkins from "../InfoAndSkins";
import Miner from "./Miner";
import Boost from "../Boost";

const Home = () => {
  return (
    <>
      <div className="container">
        <div className="hero">
          <InfoAndSkins/>
          <Miner/>
          <Boost/>
        </div>
      </div>
    </>
  );
};

export default Home;
