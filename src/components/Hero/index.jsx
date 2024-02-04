import React, { Fragment } from "react";
import "./style.scss";
import DefaultBitcoin from "../assets/img/bitcoin.png";
import YellowBitcoin from "../assets/img/bitcoinSimple.png";
import GreenBitcoin from "../assets/img/greenBitcoin.png";
import DarkerBitcoin from "../assets/img/darkerBitcoin.png";
import RedBitcoin from "../assets/img/redBitcoin.png";
import BlackAndOrange from "../assets/img/blackAndOrangeBitcoin.png";
import { useDispatch, useSelector } from "react-redux";
import DarkMode from "./DarkMode/DarkMode";

const Hero = () => {
  const darkMode = useSelector((state) => state.darkMode);
  const totalCoins = useSelector((state) => state.totalCoins);
  const levelOfClicks = useSelector((state) => state.levelOfClicks);
  const costForClick = useSelector((state) => state.costForClick);
  const levelOfBattery = useSelector((state) => state.levelOfBattery);
  const totalBattery = useSelector((state) => state.totalBattery);
  const widthOfDiv = useSelector((state) => state.widthOfDiv);
  const costForBattery = useSelector((state) => state.costForBattery);
  const costForCharge = useSelector((state) => state.costForCharge);
  const levelOfCharge = useSelector((state) => state.levelOfCharge);
  const selectedSkin = useSelector((state) => state.selectedSkin);

  const dispatch = useDispatch();

  console.log(widthOfDiv, "this is from index.js");
  return (
    <>
      <div className="container">
        <div className="hero">
          <div
            className="infoOfLevelsDisplay"
            style={{ color: darkMode ? "white" : "black", transition: "0.5s" }}
          >
            <DarkMode />
            <p className="totalCoinsDisplay">Bitcoins: {totalCoins} 🪙 </p>
            <p className="levelOfClickerDisplay">
              Level of Clicker: {levelOfClicks}👆
            </p>
            <p className="levelOfBatterDisplay">
              Level of Battery: {levelOfBattery}🔋
            </p>
            <p className="levelOfSpeedDisplay">
              Level of Charge: {levelOfCharge}⚡{" "}
            </p>

            <h1>Choose your skin</h1>
            <div className="skin-selector">

              <div>
                <button onClick={() => dispatch({type: "YELLOW_COIN"})}>
                  <img src={YellowBitcoin} alt="simpleBitcoin"/>
                </button>

                <button className="buySkinButton" >Free</button>
              </div>

              <div>
                <button onClick={() => dispatch({type: "GREEN_COIN"})}>
                  <img src={GreenBitcoin} alt="green Bitcoin" />
                </button>
                <button className="buySkinButton" onClick={dispatch({type: "SKIN_500"})} >1000 🪙</button>
              </div>

              <div>
                <button onClick={() => dispatch({type: "DARK_COIN"})}>
                  <img src={DarkerBitcoin} alt="dark Bitcoin"/>
                </button>
                
                <button className="buySkinButton" onClick={dispatch({type: "SKIN_2000"})} >2000 🪙</button>
              </div>


              <div>
                <button onClick={() => dispatch({type: "BLACK_ORANGE_COIN"})}>
                  <img src={BlackAndOrange} alt="black and orange Bitcoin"/>
                </button>

                <button className="buySkinButton"  onClick={dispatch({type: "SKIN_3000"})}>3000 🪙</button>
              </div>

              <div>
                <button onClick={() => dispatch({type: "RED_COIN"})}>
                  <img src={RedBitcoin} alt="red Bitcoin"/>
                </button>

                <button className="buySkinButton" onClick={dispatch({type: "SKIN_4000"})} >4000🪙</button>
              </div>


              <div>
                <button onClick={() => dispatch({type: "DEFAULT_COIN"})}>
                  <img src={DefaultBitcoin} alt="Bitcoin"/>
                </button>

                <button className="buySkinButton" onClick={dispatch({type: "SKIN_5000"})} >5000🪙</button>
              </div>

            </div>
          </div>

          <div
              className="centerItems"
              style={{color: darkMode ? "white" : "black", transition: "0.5s" }}
          >
            <div className="title">
              <h1>COIN MINER </h1>
              <h2 className="totalCoinsDisplay">{totalCoins} 🪙</h2>
            </div>

            <div className="mineContainer">
              <img
                className="coin"
                onClick={() => {
                  dispatch({ type: "ADD_COINS" });
                }}
                src={selectedSkin}
                alt={"img of bitcoin"}
              />
            </div>

            <h3 className="batteryDisplay"> {totalBattery}🔋</h3>
            <div className="batterySizeBorder">
              <div
                className="batterySizeDisplay"
                style={{ width: widthOfDiv + "px" }}
              ></div>
            </div>
          </div>

          <div
            className="button-container"
            style={{ color: darkMode ? "white" : "black", transition: "0.5s" }}
          >
            <div>
              <p className="costOfClickDisplay">Add +1👆 to click</p>
              <button
                className="add-click"
                onClick={() => {
                  dispatch({ type: "ADD_CLICKS" });
                }}
              >
                {costForClick} 🪙
              </button>
            </div>

            <div>
              <p className="costOfBatteryDisplay">Add +500🔋 to battery </p>
              <button
                className="add-battery"
                onClick={() => {
                  dispatch({ type: "ADD_BATTERY" });
                }}
              >
                {costForBattery} 🪙
              </button>
            </div>

            <div>
              <p className="costOfSpeedDisplay">Add +1⚡ to charge speed </p>
              <button
                className="add-speed"
                onClick={() => {
                  dispatch({ type: "ADD_SPEED" });
                }}
              >
                {costForCharge} 🪙
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
