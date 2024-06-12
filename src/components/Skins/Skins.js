/** @format */

import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import RealBitcoin from "../assets/img/bitcoin.webp"
import BitcoinSimple from "../assets/img/bitcoinSimple.webp"
import BlackAndOrange from "../assets/img/blackAndOrangeBitcoin.webp"
import DarkerBitcoin from "../assets/img/darkerBitcoin.webp"
import GreenBitcoin from "../assets/img/greenBitcoin.webp"
import RedBitcoin from "../assets/img/redBitcoin.webp"
import "./style.scss"
const Skins = () => {
	const {
		darkMode,
		totalCoins,
		skin_1000,
		skin_2000,
		skin_3000,
		skin_4000,
		skin_5000,
		selectedSkinName,
	} = useSelector(state => state)

	const dispatch = useDispatch()

	const navigate = useNavigate()

	useEffect(() => {
		console.log("selectedSkinName", selectedSkinName)
		console.log(selectedSkinName === "GreenBitcoin")
	}, [selectedSkinName])

	return (
		<div
			style={{
				color: darkMode ? "white" : "#222",
				textAlign: "start",
			}}
		>
			<h1>Choose your skin</h1>
			<h1 className="hide__total__coins">{totalCoins}$</h1>
			<div className="skin-selector">
				<div>
					<button
						style={{
							border:
								selectedSkinName === "BitcoinSimple"
									? "3px solid lightgreen"
									: "3px solid red",
						}}
						onClick={() => dispatch({ type: "YELLOW_COIN" })}
					>
						<img src={BitcoinSimple} alt="simpleBitcoin" />
					</button>

					<button
						className="buySkinButton"
						onClick={() => dispatch({ type: "YELLOW_COIN_BTN" })}
					>
						Bought ✅
					</button>
				</div>

				<div>
					<button
						style={{
							border:
								selectedSkinName === "GreenBitcoin"
									? "3px solid lightgreen"
									: "3px solid red",
						}}
						onClick={() => dispatch({ type: "GREEN_COIN" })}
					>
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
					<button
						style={{
							border:
								selectedSkinName === "DarkerBitcoin"
									? "3px solid lightgreen"
									: "3px solid red",
						}}
						onClick={() => dispatch({ type: "DARK_COIN" })}
					>
						<img src={DarkerBitcoin} alt="dark Bitcoin" />
					</button>

					<button
						disabled={skin_2000 < totalCoins}
						className="buySkinButton"
						onClick={() => dispatch({ type: "SKIN_2000" })}
					>
						{skin_2000}
					</button>
				</div>
				<div>
					<button
						style={{
							border:
								selectedSkinName === "BlackAndOrange"
									? "3px solid lightgreen"
									: "3px solid red",
						}}
						onClick={() => dispatch({ type: "BLACK_ORANGE_COIN" })}
					>
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
					<button
						style={{
							border:
								selectedSkinName === "RedBitcoin"
									? "3px solid lightgreen"
									: "3px solid red",
						}}
						onClick={() => dispatch({ type: "RED_COIN" })}
					>
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
					<button
						style={{
							border:
								selectedSkinName === "RealBitcoin"
									? "3px solid lightgreen"
									: "3px solid red",
						}}
						onClick={() => dispatch({ type: "DEFAULT_COIN" })}
					>
						<img src={RealBitcoin} alt="Bitcoin" />
					</button>

					<button
						className="buySkinButton"
						onClick={() => dispatch({ type: "SKIN_5000" })}
					>
						{skin_5000}
					</button>
				</div>
			</div>
			<button className="navigate__home__btn" onClick={() => navigate("/")}>
				Go back {"<"}
			</button>
		</div>
	)
}
export default Skins
