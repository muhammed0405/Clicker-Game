/** @format */

import RealBitcoin from "../assets/img/bitcoin.png"
import BitcoinSimple from "../assets/img/bitcoinSimple.png"
import BlackAndOrange from "../assets/img/blackAndOrangeBitcoin.png"
import DarkerBitcoin from "../assets/img/darkerBitcoin.png"
import GreenBitcoin from "../assets/img/greenBitcoin.jpg"
import RedBitcoin from "../assets/img/redBitcoin.png"
import LevelUp from "../assets/sound/LevelUpShort.mp3"
import { store } from "./store"

const audio = new Audio(LevelUp)

const initialState = {
	totalCoins: 1000,
	totalBattery: 4000,

	levelOfClicks: 50,
	levelOfBattery: 4000,
	levelOfCharge: 30,

	costForClick: 500,
	costForBattery: 500,
	costForCharge: 500,

	widthOfDiv: 280,

	selectedSkin: BitcoinSimple,
	selectedSkinName: "BitcoinSimple",
	darkMode: false,

	addedClicks: false,
	addedBattery: false,
	addedSpeed: false,

	skin_free: "Bought ✅",
	skin_1000: "1000 $",
	skin_2000: "2000 $",
	skin_3000: "3000 $",
	skin_4000: "4000 $",
	skin_5000: "5000 $",

	showClickBoost: "+1 ",
}

console.log("initialState.darkMode", initialState.darkMode)

setInterval(() => {
	if (store.getState().totalBattery < store.getState().levelOfBattery) {
		store.dispatch({ type: "CHARGE_BATTERY" })
	}

	if (store.getState().widthOfDiv > 280) {
		store.getState().widthOfDiv = 280
	}
}, 500)

export const Reducer = (state = initialState, action) => {
	switch (action.type) {
		case "ADD_COINS":
			if (state.totalBattery >= state.levelOfClicks) {
				return {
					...state,
					totalCoins: state.totalCoins + state.levelOfClicks,
					totalBattery: state.totalBattery - state.levelOfClicks,
					widthOfDiv:
						state.widthOfDiv -
						(state.widthOfDiv / state.totalBattery) * state.levelOfClicks,
				}
			} else {
				return {
					...state,
					totalCoins: Math.min(
						state.totalCoins + state.totalBattery,
						state.totalCoins + state.levelOfClicks
					),

					totalBattery: 0,
				}
			}
			break

		case "ADD_CLICKS":
			if (state.totalCoins >= state.costForClick) {
				audio.play()

				return {
					...state,
					levelOfClicks: state.levelOfClicks + 1,
					totalCoins: state.totalCoins - state.costForClick,
					costForClick: state.costForClick * 2,
					addedClicks: true,
				}
			}

			return state

		case "ADD_BATTERY":
			if (state.totalCoins >= state.costForBattery) {
				audio.play()
				return {
					...state,
					levelOfBattery: state.levelOfBattery + 500,
					totalCoins: state.totalCoins - state.costForCharge,
					costForBattery: state.costForBattery * 2,
					addedBattery: true,
				}
			}
			return state

		case "ADD_SPEED":
			if (state.totalCoins >= state.costForCharge) {
				audio.play()
				return {
					...state,
					levelOfCharge: state.levelOfCharge + 1,
					totalCoins: state.totalCoins - state.costForCharge,
					costForCharge: state.costForCharge * 2,
					addedSpeed: true,
				}
			}

			return state

		case "CLEAR_ADDED_SPEED":
			return {
				...state,
				addedSpeed: false,
				addedClicks: false,
				addedBattery: false,
			}

		case "CHARGE_BATTERY":
			// If the battery is not fully charged, charge it
			if (state.totalBattery + state.levelOfCharge <= state.levelOfBattery) {
				return {
					...state,
					totalBattery: state.totalBattery + state.levelOfCharge,
					widthOfDiv:
						state.widthOfDiv +
						(280 / state.levelOfBattery) * state.levelOfCharge,
				}
			}
			// If the charge would exceed the battery level, set it to max
			return state

		// from here is to chose skins
		case "GREEN_COIN":
			if (state.skin_1000 === "Bought ✅") {
				return {
					...state,
					selectedSkin: GreenBitcoin,
					selectedSkinName: "GreenBitcoin",
				}
			}
			return state
		case "YELLOW_COIN":
			return {
				...state,
				selectedSkin: (state.selectedSkin = BitcoinSimple),
				selectedSkinName: "BitcoinSimple",
			}

		case "DEFAULT_COIN":
			if (state.skin_5000 === "Bought ✅") {
				return {
					...state,
					selectedSkin: RealBitcoin,
					selectedSkinName: "RealBitcoin",
				}
			}
			return state
		case "DARK_COIN":
			if (state.skin_2000 === "Bought ✅") {
				return {
					...state,
					selectedSkin: DarkerBitcoin,
					selectedSkinName: "DarkerBitcoin",
				}
			}
			return state

		case "BLACK_ORANGE_COIN":
			if (state.skin_3000 === "Bought ✅") {
				return {
					...state,
					selectedSkin: BlackAndOrange,
					selectedSkinName: "BlackAndOrange",
				}
			}
			return state
		case "RED_COIN":
			if (state.skin_4000 === "Bought ✅") {
				return {
					...state,
					selectedSkin: RedBitcoin,
					selectedSkinName: "RedBitcoin",
				}
			}
			return state
		case "CHANGE_DARK":
			if (!state.darkMode) {
				return {
					...state,
					darkMode: (state.darkMode = true),
				}
			} else {
				return {
					...state,
					darkMode: (state.darkMode = false),
				}
			}

		case "YELLOW_COIN_BTN":
			if (state.skin_free === "Bought ✅") {
				return {
					...state,
					selectedSkin: (state.selectedSkin = BitcoinSimple),
					selectedSkinName: "BitcoinSimple",
				}
			}
			return state

		case "SKIN_1000":
			if (state.totalCoins >= 1000 && state.skin_1000 === "1000 $") {
				return {
					...state,
					skin_1000: (state.skin_1000 = "Bought ✅"),
					totalCoins: state.totalCoins - 1000,
				}
			} else if (state.skin_1000 === "Bought ✅") {
				return {
					...state,
					selectedSkin: (state.selectedSkin = GreenBitcoin),
				}
			}

			return state

		case "SKIN_2000":
			if (state.totalCoins >= 2000 && state.skin_2000 === "2000 $") {
				return {
					...state,
					skin_2000: (state.skin_2000 = "Bought ✅"),
					totalCoins: state.totalCoins - 2000,
				}
			} else if (state.skin_2000 === "Bought ✅") {
				return {
					...state,
					selectedSkin: (state.selectedSkin = DarkerBitcoin),
				}
			}

			return state

		case "SKIN_3000":
			if (state.totalCoins >= 3000 && state.skin_3000 === "3000 $") {
				return {
					...state,
					skin_3000: (state.skin_3000 = "Bought ✅"),
					totalCoins: state.totalCoins - 3000,
				}
			} else if (state.skin_3000 === "Bought ✅") {
				return {
					...state,
					selectedSkin: (state.selectedSkin = BlackAndOrange),
				}
			}

			return state

		case "SKIN_4000":
			if (state.totalCoins >= 4000 && state.skin_4000 === "4000 $") {
				return {
					...state,
					skin_4000: (state.skin_4000 = "Bought ✅"),
					totalCoins: state.totalCoins - 4000,
				}
			} else if (state.skin_4000 === "Bought ✅") {
				return {
					...state,
					selectedSkin: (state.selectedSkin = RedBitcoin),
				}
			}

			return state

		case "SKIN_5000":
			if (state.totalCoins >= 5000 && state.skin_5000 === "5000 $") {
				return {
					...state,
					skin_5000: (state.skin_5000 = "Bought ✅"),
					totalCoins: state.totalCoins - 5000,
				}
			} else if (state.skin_5000 === "Bought ✅") {
				return {
					...state,
					selectedSkin: (state.selectedSkin = RealBitcoin),
				}
			}

			return state

		default:
			return state
	}
}
