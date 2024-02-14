import React, { useEffect } from "react";
import "./style.scss";
import DarkMode from "../Home/DarkMode/DarkMode";
import YellowBitcoin from "../assets/img/bitcoinSimple.png";
import GreenBitcoin from "../assets/img/greenBitcoin.jpg";
import DarkerBitcoin from "../assets/img/darkerBitcoin.png";
import BlackAndOrange from "../assets/img/blackAndOrangeBitcoin.png";
import RedBitcoin from "../assets/img/redBitcoin.png";
import DefaultBitcoin from "../assets/img/bitcoin.png";
import { useDispatch, useSelector } from "react-redux";

const InfoAndSkins = () => {
  const {
    darkMode,
    totalCoins,
    levelOfClicks,
    levelOfBattery,
    levelOfCharge,
    skin_1000,
    skin_2000,
    skin_3000,
    skin_4000,
    skin_5000,
    addedClicks,
    addedBattery,
    addedSpeed,
  } = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    let timeoutId;

    if (addedSpeed || addedBattery || addedClicks) {
      timeoutId = setTimeout(() => {
        dispatch({ type: "CLEAR_ADDED_SPEED" });
      }, 3000);
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [addedSpeed, addedBattery, addedClicks, dispatch]);

  return (
    <>
      <div
        className="infoOfLevelsDisplay"
        style={{ color: darkMode ? "white" : "black", transition: "0.5s"  }}
      >
        <DarkMode />
        <p className="totalCoinsDisplay">Bitcoins: {totalCoins} $ </p>
        <p className="levelOfClickerDisplay">
          Level of Clicker: {levelOfClicks}👆{" "}
          <span>{addedClicks ? "+1 👆" : ""}</span>
        </p>
        <p className="levelOfBatterDisplay">
          Level of Battery: {levelOfBattery}🔋{" "}
          <span>{addedBattery ? "+500 🔋" : ""}</span>
        </p>
        <p className="levelOfSpeedDisplay">
          Level of Charge: {levelOfCharge}⚡{" "}
          <span>{addedSpeed ? "+1 ⚡" : ""}</span>
        </p>

        <h1>Choose your skin</h1>
        <div className="skin-selector">
          <div>
            <button onClick={() => dispatch({ type: "YELLOW_COIN" })}>
              <img src={YellowBitcoin} alt="simpleBitcoin" />
            </button>

            <button
              className="buySkinButton"
              onClick={() => dispatch({ type: "YELLOW_COIN_BTN" })}
            >
              Bought ✅
            </button>
          </div>

          <div>
            <button onClick={() => dispatch({ type: "GREEN_COIN" })}>
              <img src={GreenBitcoin} alt="green Bitcoin" />
            </button>
            <button
              className="buySkinButton"
              onClick={() => dispatch({ type: "SKIN_1000" })}
            >
              {skin_1000}
            </button>
          </div>

          <div>
            <button onClick={() => dispatch({ type: "DARK_COIN" })}>
              <img src={DarkerBitcoin} alt="dark Bitcoin" />
            </button>

            <button
              className="buySkinButton"
              onClick={() => dispatch({ type: "SKIN_2000" })}
            >
              {skin_2000}
            </button>
          </div>

          <div>
            <button onClick={() => dispatch({ type: "BLACK_ORANGE_COIN" })}>
              <img src={BlackAndOrange} alt="black and orange Bitcoin" />
            </button>

            <button
              className="buySkinButton"
              onClick={() => dispatch({ type: "SKIN_3000" })}
            >
              {skin_3000}
            </button>
          </div>

          <div>
            <button onClick={() => dispatch({ type: "RED_COIN" })}>
              <img src={RedBitcoin} alt="red Bitcoin" />
            </button>

            <button
              className="buySkinButton"
              onClick={() => dispatch({ type: "SKIN_4000" })}
            >
              {skin_4000}
            </button>
          </div>

          <div>
            <button onClick={() => dispatch({ type: "DEFAULT_COIN" })}>
              <img src={DefaultBitcoin} alt="Bitcoin" />
            </button>

            <button
              className="buySkinButton"
              onClick={() => dispatch({ type: "SKIN_5000" })}
            >
              {skin_5000}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoAndSkins;