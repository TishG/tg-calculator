import { createStore, combineReducers } from "redux";
import { settingsReducer } from "./reducers/settingsReducer";
import { calculatorReducer } from "./reducers/calculatorReducer";

const reducer = combineReducers({
  settings: settingsReducer,
  calculator: calculatorReducer
});

export const store = createStore(reducer);
