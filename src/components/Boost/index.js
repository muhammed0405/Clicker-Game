/** @format */

import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import "./style.scss"
const Boost = () => {
	const totalCoins = useSelector(state => state.totalCoins)
	const darkMode = useSelector(state => state.darkMode)
	const dispatch = useDispatch()
	const costForClick = useSelector(state => state.costForClick)

	const costForBattery = useSelector(state => state.costForBattery)

	const costForCharge = useSelector(state => state.costForCharge)

	const navigate = useNavigate()

	return (
		<>
			<div
				className="button-container"
				style={{ color: darkMode ? "white" : "black", transition: "0.5s" }}
			>
				<h1 className="hide__total__coins">{totalCoins}$</h1>
				<div
					style={{
						transition: "0.5s",
						borderBottom: darkMode ? " 1px solid white" : "1px solid black",
					}}
				>
					<p className="costOfClickDisplay">Add +1 👆 to click</p>
					<button
						className="add-click"
						onClick={() => dispatch({ type: "ADD_CLICKS" })}
					>
						{costForClick} $
					</button>
				</div>

				<div
					style={{
						transition: "0.5s",
						borderBottom: darkMode ? " 1px solid white" : "1px solid black",
					}}
				>
					<p className="costOfBatteryDisplay">Add +500🔋 to battery </p>

					<button
						className="add-battery"
						onClick={() => {
							dispatch({ type: "ADD_BATTERY" })
						}}
					>
						{costForBattery} $
					</button>
				</div>

				<div
					style={{
						transition: "0.5s",
						borderBottom: darkMode ? " 1px solid white" : "1px solid black",
					}}
				>
					<p className="costOfSpeedDisplay">Add +1⚡ to charge speed </p>
					<button
						className="add-speed"
						onClick={() => {
							dispatch({ type: "ADD_SPEED" })
						}}
					>
						{costForCharge} $
					</button>
				</div>
			</div>
			<button className="navigate__home__btn" onClick={() => navigate("/")}>
				Go back {"<"}
			</button>
		</>
	)
}

export default Boost
