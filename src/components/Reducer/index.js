import { store } from "../store";
import DefaultBitcoin from "../assets/img/bitcoin.png";
import YellowBitcoin from "../assets/img/bitcoinSimple.png";
import GreenBitcoin from "../assets/img/greenBitcoin.png";
import DarkerBitcoin from "../assets/img/darkerBitcoin.png";
import BlackAndOrange from "../assets/img/blackAndOrangeBitcoin.png";
import RedBitcoin from "../assets/img/redBitcoin.png";

const initialState = {
  totalCoins: 0,
  levelOfClicks: 1,
  levelOfBattery: 4000,
  totalBattery: 4000,
  levelOfCharge: 1,
  costForClick: 500,
  costForBattery: 500,
  costForCharge: 500,
  widthOfDiv: 280,
  selectedSkin: YellowBitcoin,
  darkMode: false,
  skin_1000: "1000 🪙",
  skin_2000: "2000 🪙",
  skin_3000: "3000 🪙",
  skin_4000: "4000 🪙",
  skin_5000: "5000 🪙",
};
setInterval(() => {
  if (store.getState().totalBattery < store.getState().levelOfBattery) {
    store.dispatch({ type: "CHARGE_BATTERY" });
  }

  if (store.getState().widthOfDiv > 280) {
    store.getState().widthOfDiv = 280;
  }
}, 500);
export const Reducer = (state = initialState, { type }) => {
  switch (type) {
    case "ADD_COINS":
      if (state.totalBattery >= state.levelOfClicks) {
        return {
          ...state,
          totalCoins: state.totalCoins + state.levelOfClicks,
          totalBattery: state.totalBattery - state.levelOfClicks,
          widthOfDiv:
            state.widthOfDiv -
            (state.widthOfDiv / state.totalBattery) * state.levelOfClicks,
        };
      }

      if (state.levelOfClicks > state.totalBattery) {
        state.totalCoins += state.totalBattery;

        if (
          state.totalCoins < state.levelOfClicks ||
          state.levelOfClicks > state.totalBattery
        ) {
          return {
            ...state,
            totalBattery: (state.totalBattery = 0),
          };
        }
      }

      return state;
    case "ADD_CLICKS":
      if (state.totalCoins >= state.costForClick) {
        return {
          ...state,
          levelOfClicks: state.levelOfClicks + 1,
          totalCoins: state.totalCoins - state.costForClick,
          costForClick: state.costForClick * 2,
        };
      }

      return state;
    case "ADD_BATTERY":
      if (state.totalCoins >= state.costForBattery) {
        return {
          ...state,
          levelOfBattery: state.levelOfBattery + 500,
          totalCoins: state.totalCoins - state.costForCharge,
          costForBattery: state.costForBattery * 2,
        };
      }
      return state;

    case "ADD_SPEED":
      if (state.totalCoins >= state.costForCharge) {
        return {
          ...state,
          levelOfCharge: state.levelOfCharge + 1,
          totalCoins: state.totalCoins - state.costForCharge,
          costForCharge: state.costForCharge * 2,
        };
      }

      return state;

    case "CHARGE_BATTERY":
      const newTotalBattery =
        state.totalBattery > state.levelOfBattery
          ? state.levelOfBattery
          : state.totalBattery + state.levelOfCharge;
      const newWidthOfDiv =
        state.widthOfDiv < 280
          ? state.widthOfDiv +
            (280 / state.levelOfBattery) * state.levelOfCharge
          : state.widthOfDiv;
      return {
        ...state,
        totalBattery:
          state.totalBattery > state.levelOfBattery
            ? state.levelOfBattery
            : newTotalBattery,
        widthOfDiv: newWidthOfDiv,
      };
    case "GREEN_COIN":
      if(state.skin_1000 === "Bought ✅") {
        return {
          ...state,
          selectedSkin: GreenBitcoin,
        }
      }
      return state
    case "YELLOW_COIN":
      return {
        ...state,
        selectedSkin: (state.selectedSkin = YellowBitcoin),
      };

    case "DEFAULT_COIN":
      if(state.skin_5000 === "Bought ✅") {
        return {
          ...state,
          selectedSkin: DefaultBitcoin,
        }
      }
      return state
    case "DARK_COIN":

      if(state.skin_2000 === "Bought ✅"){
        return {
          ...state,
          selectedSkin: DarkerBitcoin,
        };
      }
      return state


    case "BLACK_ORANGE_COIN":
      if(state.skin_3000 === "Bought ✅") {
        return {
          ...state,
          selectedSkin: BlackAndOrange,
        }
      }
      return state
    case "RED_COIN":
      if(state.skin_4000 === "Bought ✅") {
        return {
          ...state,
          selectedSkin: RedBitcoin,
        }
      }
      return state
    case "CHANGE_DARK":
      if (!state.darkMode) {
        return {
          ...state,
          darkMode: (state.darkMode = true),
        };
      } else {
        return {
          ...state,
          darkMode: (state.darkMode = false),
        };
      }


    case "SKIN_1000":

      if(state.totalCoins >= 1000 && state.skin_1000 === "1000 🪙") {
        return {
          ...state,
          skin_1000: state.skin_1000 = "Bought ✅",
          totalCoins: state.totalCoins - 1000
        }

      }

      return state


    case "SKIN_2000":

      if(state.totalCoins >= 2000 && state.skin_2000 === "2000 🪙") {
        return {
          ...state,
          skin_2000: state.skin_2000 = "Bought ✅",
          totalCoins: state.totalCoins - 2000
        }

      }

      return state

    case "SKIN_3000":

      if(state.totalCoins >= 3000 && state.skin_3000 === "3000 🪙") {
        return {
          ...state,
          skin_3000: state.skin_3000 = "Bought ✅",
          totalCoins: state.totalCoins - 3000
        }

      }

      return state


    case "SKIN_4000":

      if(state.totalCoins >= 4000 && state.skin_4000 === "4000 🪙") {
        return {
          ...state,
          skin_4000: state.skin_4000 = "Bought ✅",
          totalCoins: state.totalCoins - 4000
        }

      }

      return state


    case "SKIN_5000":

      if(state.totalCoins >= 5000 && state.skin_5000 === "5000 🪙") {
        return {
          ...state,
          skin_5000: state.skin_5000 = "Bought ✅",
          totalCoins: state.totalCoins - 5000
        }

      }

      return state





    default:
      return state;
  }
};
