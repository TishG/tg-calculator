import { createStore, combineReducers } from "redux";
import settings from "./reducers/settingsReducer";
import calculator from "./reducers/calculatorReducer";

export const store = createStore(
  combineReducers({
    settings,
    calculator
  })
);
