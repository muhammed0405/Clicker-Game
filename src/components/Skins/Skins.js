/** @format */

import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import RealBitcoin from "../assets/img/bitcoin.png"
import BitcoinSimple from "../assets/img/bitcoinSimple.png"
import BlackAndOrange from "../assets/img/blackAndOrangeBitcoin.png"
import DarkerBitcoin from "../assets/img/darkerBitcoin.png"
import GreenBitcoin from "../assets/img/greenBitcoin.jpg"
import RedBitcoin from "../assets/img/redBitcoin.png"
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
	} = useSelector(state => state)

	const dispatch = useDispatch()

	const navigate = useNavigate()

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
					<button onClick={() => dispatch({ type: "YELLOW_COIN" })}>
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
								skin_1000 === "1000 $"
									? "2px solid red"
									: "2px solid lightgreen",
						}}
						onClick={() => dispatch({ type: "GREEN_COIN" })}
					>
						<img src={GreenBitcoin} alt="green Bitcoin" />
					</button>
					<button
						style={{
							border:
								skin_1000 === "1000 $"
									? "2px solid red"
									: "2px solid lightgreen",
						}}
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
								skin_2000 === "2000 $"
									? "2px solid red"
									: "2px solid lightgreen",
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
								skin_3000 === "3000 $"
									? "2px solid red"
									: "2px solid lightgreen",
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
								skin_4000 === "4000 $"
									? "2px solid red"
									: "2px solid lightgreen",
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
								skin_5000 === "5000 $"
									? "2px solid red"
									: "2px solid lightgreen",
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
				Go back
			</button>
		</div>
	)
}
export default Skins
