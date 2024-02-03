import {store} from "../store";

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
}



setInterval(() => {
    if (store.getState().totalBattery < store.getState().levelOfBattery) {
        store.dispatch({ type: "CHARGE_BATTERY" });
    }
}, 500);
 export const Reducer = (state = initialState , {type}) => {


    switch (type){
        case "ADD_COINS":

            if(state.totalBattery >= state.levelOfClicks) {
                return {
                    ...state,
                    totalCoins: state.totalCoins + state.levelOfClicks,
                    totalBattery: state.totalBattery - state.levelOfClicks,
                    widthOfDiv: state.widthOfDiv - (state.widthOfDiv / state.totalBattery) * state.levelOfClicks
                }
            }

            if(state.levelOfClicks > state.totalBattery){
                state.totalCoins += state.totalBattery

                if(state.totalCoins < state.levelOfClicks || state.levelOfClicks > state.totalBattery){
                    return {
                        ...state,
                        totalBattery: state.totalBattery = 0
                    }
                }
            }


            return state
        case "ADD_CLICKS":

            if(state.totalCoins >= state.costForClick){

                return {
                    ...state,
                    levelOfClicks: state.levelOfClicks + 1,
                    totalCoins: state.totalCoins - state.costForClick,
                    costForClick: state.costForClick * 2,

                }
            }

            return state
        case "ADD_BATTERY":
            

            if(state.totalCoins >= state.costForBattery ){
                return {
                    ...state,
                    levelOfBattery: state.levelOfBattery + 500,
                    totalCoins: state.totalCoins - state.costForCharge,
                    costForBattery: state.costForBattery * 2,

                }
            }
            return state


        case "ADD_SPEED":

            if(state.totalCoins >= state.costForCharge){
                return {
                    ...state,
                    levelOfCharge: state.levelOfCharge + 1,
                    totalCoins: state.totalCoins - state.costForCharge,
                    costForCharge: state.costForCharge * 2
                }
            }

            return state

        case "CHARGE_BATTERY":
            return {
                ...state,
                totalBattery:  state.totalBattery + state.levelOfCharge
            }
        default:
            return state
    }
}