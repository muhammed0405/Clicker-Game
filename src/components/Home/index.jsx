/** @format */

import { FaBitcoin, FaInfoCircle } from "react-icons/fa"
import { IoRocketSharp } from "react-icons/io5"
import { useNavigate } from "react-router-dom"
import Boost from "../Boost"
import InfoAndSkins from "../Info"
import Skins from "../Skins/Skins"
import Miner from "./Miner"
import "./style.scss"
const Home = () => {
	const deviceInnerWidth = window.innerWidth
	const navigate = useNavigate()

	return (
		<>
			<div className="container">
				<div>
					{deviceInnerWidth < 1020 ? (
						<div className="hero__mobile">
							<Miner />
							<div className="hero__mobile__nav">
								<button onClick={() => navigate("/info")}>
									<FaInfoCircle />
								</button>
								<button onClick={() => navigate("/skins")}>
									<FaBitcoin />
								</button>
								<button onClick={() => navigate("/boost")}>
									<IoRocketSharp />
								</button>
							</div>
						</div>
					) : (
						<div className="hero">
							<div>
								<InfoAndSkins />
								<Skins />
							</div>
							<Miner />
							<Boost />
						</div>
					)}
				</div>
			</div>
		</>
	)
}

export default Home
