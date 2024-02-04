import React from 'react';
import "./style.scss"
import DarkMode from "../DarkMode/DarkMode";
import YellowBitcoin from "../../assets/img/bitcoinSimple.png";
import GreenBitcoin from "../../assets/img/greenBitcoin.png";
import DarkerBitcoin from "../../assets/img/darkerBitcoin.png";
import BlackAndOrange from "../../assets/img/blackAndOrangeBitcoin.png";
import RedBitcoin from "../../assets/img/redBitcoin.png";
import DefaultBitcoin from "../../assets/img/bitcoin.png";
import {useDispatch, useSelector} from "react-redux";

const InfoAndSkins = () => {
    const darkMode = useSelector((state) => state.darkMode);
    const totalCoins = useSelector((state) => state.totalCoins);
    const levelOfClicks = useSelector((state) => state.levelOfClicks);
    const levelOfBattery = useSelector((state) => state.levelOfBattery);
    const levelOfCharge = useSelector((state) => state.levelOfCharge);
    const {skin_1000} = useSelector(state => state);
    const {skin_2000} = useSelector(state => state);
    const {skin_3000} = useSelector(state => state);
    const {skin_4000} = useSelector(state => state);
    const {skin_5000} = useSelector(state => state)


    const dispatch = useDispatch();


    return (
        <>
            <div
                className="infoOfLevelsDisplay"
                style={{color: darkMode ? "white" : "black", transition: "0.5s"}}
            >
                <DarkMode/>
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

                        <button className="buySkinButton">Bought ✅</button>
                    </div>

                    <div>
                        <button onClick={() => dispatch({type: "GREEN_COIN"})}>
                            <img src={GreenBitcoin} alt="green Bitcoin"/>
                        </button>
                        <button className="buySkinButton"
                                onClick={() => dispatch({type: "SKIN_1000"})}>{skin_1000}</button>
                    </div>

                    <div>
                        <button onClick={() => dispatch({type: "DARK_COIN"})}>
                            <img src={DarkerBitcoin} alt="dark Bitcoin"/>
                        </button>

                        <button className="buySkinButton"
                                onClick={() => dispatch({type: "SKIN_2000"})}>{skin_2000}</button>
                    </div>


                    <div>
                        <button onClick={() => dispatch({type: "BLACK_ORANGE_COIN"})}>
                            <img src={BlackAndOrange} alt="black and orange Bitcoin"/>
                        </button>

                        <button className="buySkinButton"
                                onClick={() => dispatch({type: "SKIN_3000"})}>{skin_3000}</button>
                    </div>

                    <div>
                        <button onClick={() => dispatch({type: "RED_COIN"})}>
                            <img src={RedBitcoin} alt="red Bitcoin"/>
                        </button>

                        <button className="buySkinButton"
                                onClick={() => dispatch({type: "SKIN_4000"})}>{skin_4000}</button>
                    </div>


                    <div>
                        <button onClick={() => dispatch({type: "DEFAULT_COIN"})}>
                            <img src={DefaultBitcoin} alt="Bitcoin"/>
                        </button>

                        <button className="buySkinButton"
                                onClick={() => dispatch({type: "SKIN_5000"})}>{skin_5000}</button>
                    </div>

                </div>
            </div>
        </>
    );
};

export default InfoAndSkins;