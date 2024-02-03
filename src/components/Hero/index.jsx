import React, {Fragment, useState} from 'react';
import "./style.scss"
import Bitcoin from "../assets/img/bitcoin.png"
import SimpleBitcoin from "../assets/img/bitcoinSimple.png"
import GreenBitcoin from "../assets/img/greenBitcoin.png"
import {useDispatch, useSelector} from "react-redux";

    const Hero = () => {
    const totalCoins  = useSelector((state) => state.totalCoins)
    const levelOfClicks = useSelector(state => state.levelOfClicks)
    const costForClick = useSelector(state => state.costForClick)
    const levelOfBattery = useSelector(state => state.levelOfBattery)
    const totalBattery = useSelector(state => state.totalBattery)
    const widthOfDiv = useSelector(state => state.widthOfDiv)
    const costForBattery = useSelector(state => state.costForBattery)
    const costForCharge = useSelector(state => state.costForCharge)
    const levelOfCharge = useSelector(state => state.levelOfCharge)

    const dispatch = useDispatch()
        const [selectedSkin, setSelectedSkin] = useState("default");
        const handleSkinChange = (skin) => {
            setSelectedSkin(skin);
        };

        const getSkinImage = () => {
            switch (selectedSkin) {
                case "simple":
                    return SimpleBitcoin;
                case "green":
                    return GreenBitcoin;
                default:
                    return Bitcoin;
            }
        };
    return (
        <>
            <div className="container">
                <div className="hero">

                    <div className="infoOfLevelsDisplay">

                        <p className="totalCoinsDisplay">Bitcoins: {totalCoins} 🪙 </p>
                        <p className="levelOfClickerDisplay">Level of Clicker: {levelOfClicks}👆</p>
                        <p className="levelOfBatterDisplay">Level of Battery: {levelOfBattery}🔋</p>
                        <p className="levelOfSpeedDisplay">Level of Charge: {levelOfCharge}⚡</p>

                    </div>

                    <div className="centerItems">
                        <div className="title">
                            <h1>COIN MINER </h1>
                            <p className="totalCoinsDisplay">Bitcoins: {totalCoins} 🪙</p>

                        </div>


                        <div className="mineContainer">
                            <img className="coin" onClick={() => {
                                dispatch({type: "ADD_COINS"})
                            }} src={getSkinImage()} alt={"img of bitcoin"}/>
                        </div>


                        <p className="batteryDisplay">Battery : {totalBattery}🔋</p>
                        <div className="batterySizeBorder">
                            <div className="batterySizeDisplay" style={{width: widthOfDiv + "px"}}></div>
                        </div>


                        <div className="skin-selector">
                            <button onClick={() => handleSkinChange("default")}><img src={Bitcoin} alt="Bitcoin"/></button>
                            <button onClick={() => handleSkinChange("simple")}><img src={SimpleBitcoin} alt="simpleBitcoin"/></button>
                            <button onClick={() => handleSkinChange("green")}><img src={GreenBitcoin} alt="green Bitcoin"/></button>
                        </div>

                    </div>


                    <div className="button-container">

                        <div>
                            <p className="costOfClickDisplay">Add +1 click for {costForClick} 🪙</p>
                            <button className="add-click" onClick={() => {
                                dispatch({type: "ADD_CLICKS"})
                            }}>+1
                            </button>
                        </div>

                        <div>
                            <p className="costOfBatteryDisplay">Add +500 battery for {costForBattery} 🪙 </p>
                            <button className="add-battery" onClick={()=>{dispatch({type: "ADD_BATTERY"})}} >+500</button>

                        </div>

                        <div>

                            <p className="costOfSpeedDisplay">Add +1 charge speed for {costForCharge} 🪙 </p>
                            <button className="add-speed"  onClick={()=>{dispatch({type: "ADD_SPEED"})}}>+1</button>

                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Hero;