import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import "./style.scss"
const Miner = () => {
    const darkMode = useSelector((state) => state.darkMode);
    const totalCoins = useSelector((state) => state.totalCoins);
    const selectedSkin = useSelector((state) => state.selectedSkin);
    const totalBattery = useSelector((state) => state.totalBattery);
    const widthOfDiv = useSelector((state) => state.widthOfDiv);


    const dispatch = useDispatch();

    return (
        <>
            <div
                className="centerItems"
                style={{color: darkMode ? "white" : "black", transition: "0.5s"}}
            >
                <div className="title">
                    <h1>COIN MINER </h1>
                    <h2 className="totalCoinsDisplay">{totalCoins} 🪙</h2>
                </div>

                <div className="mineContainer">
                    <img
                        className="coin"
                        onClick={() => {
                            dispatch({type: "ADD_COINS"});
                        }}
                        src={selectedSkin}
                        alt={"img of bitcoin"}
                    />
                </div>

                <h3 className="batteryDisplay"> {totalBattery}🔋</h3>
                <div className="batterySizeBorder">
                    <div
                        className="batterySizeDisplay"
                        style={{width: widthOfDiv + "px"}}
                    ></div>
                </div>
            </div>
        </>
    );
};

export default Miner;