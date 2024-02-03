import {createStore} from "redux";
import {Reducer} from "./Reducer/index"

export  const store = createStore(Reducer)