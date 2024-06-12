/** @format */

import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import "./style.scss"

const Info = () => {
	const {
		darkMode,
		totalCoins,
		levelOfClicks,
		levelOfBattery,
		levelOfCharge,
		addedClicks,
		addedBattery,
		addedSpeed,
	} = useSelector(state => state)

	const dispatch = useDispatch()

	const navigate = useNavigate()

	useEffect(() => {
		let timeoutId

		if (addedSpeed || addedBattery || addedClicks) {
			timeoutId = setTimeout(() => {
				dispatch({ type: "CLEAR_ADDED_SPEED" })
			}, 3000)
		}
		return () => {
			clearTimeout(timeoutId)
		}
	}, [addedSpeed, addedBattery, addedClicks])

	return (
		<>
			<div
				className="infoOfLevelsDisplay"
				style={{ color: darkMode ? "white" : "black", transition: "0.5s" }}
			>
				<p className="totalCoinsDisplay">Balance: {totalCoins} $ </p>
				<p className="levelOfClickerDisplay">
					Level of Clicker: {levelOfClicks}👆{" "}
					<span>{addedClicks ? "+1 👆" : ""}</span>
				</p>
				<p className="levelOfBatterDisplay">
					Level of Battery: {levelOfBattery}🔋{" "}
					<span>{addedBattery ? "+500 🔋" : ""}</span>
				</p>
				<p className="levelOfSpeedDisplay">
					Level of Charger: {levelOfCharge}⚡{" "}
					<span>{addedSpeed ? "+1 ⚡" : ""}</span>
				</p>

				<button className="navigate__home__btn" onClick={() => navigate("/")}>
					Go back {"<"}
				</button>
			</div>
		</>
	)
}

export default Info
