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
	const navigate = useNavigate()

	return (
		<>
			<div className="container">
				<div>
					<div className="hero">
						<div className="hero__mobile__hide">
							<InfoAndSkins />
							<Skins />
						</div>
						<Miner />
						<div className="hero__mobile__hide">
							<Boost />
						</div>
					</div>
					<div className="hero__mobile">
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
				</div>
			</div>
		</>
	)
}

export default Home
