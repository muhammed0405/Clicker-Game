/** @format */

import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import "./style.scss"
const Miner = () => {
	const darkMode = useSelector(state => state.darkMode)
	const totalCoins = useSelector(state => state.totalCoins)
	const selectedSkin = useSelector(state => state.selectedSkin)
	const totalBattery = useSelector(state => state.totalBattery)
	const widthOfDiv = useSelector(state => state.widthOfDiv)
	const levelOfClicks = useSelector(state => state.levelOfClicks)
	const levelOfCharge = useSelector(state => state.levelOfCharge)
	const dispatch = useDispatch()

	const [bonus, setBonus] = useState(false)

	setInterval(() => {
		if (bonus) {
			setBonus(false)
		}
	}, 6000)

	setTimeout(() => {
		if (setBonus === false) {
			setBonus(true)
		}
	}, 6000)

	return (
		<>
			<div
				className="centerItems"
				style={{ color: darkMode ? "white" : "black", transition: "0.5s" }}
			>
				<div className="title">
					<h1>COIN MINER </h1>
					<div className="miner__info ">
						<p>
							<bold>+{levelOfClicks}$</bold> per 👆
						</p>
						<h2 className="totalCoinsDisplay">{totalCoins} $</h2>
						<p>+{levelOfCharge} ⚡</p>
					</div>
				</div>
				<div className="mineContainer">
					<img
						className="coin"
						onClick={() => {
							dispatch({ type: "ADD_COINS" })
						}}
						src={selectedSkin}
						alt={"img of bitcoin"}
					/>
				</div>

				{bonus ? <button onClick={() => setBonus(false)}>🚀</button> : ""}

				<h3 className="batteryDisplay"> {totalBattery}🔋</h3>
				<div className="batterySizeBorder">
					<div
						className="batterySizeDisplay"
						style={{ width: widthOfDiv + "px" }}
					></div>
				</div>
			</div>
		</>
	)
}

export default Miner
