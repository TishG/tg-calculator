import {
  SET_ENTER,
  SET_CLEAR,
  SET_LIMIT_REACHED,
  SET_VALUE
} from "../constants/calculatorConstants";

const initialState = {
  value: "0",
  limitReached: false,
  result: false
};

export const calculatorReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_VALUE:
      return {
        ...state,
        value: action.payload,
        result: false
      };
    case SET_ENTER:
      return {
        ...state,
        value: eval(state.value),
        limitReached: false,
        result: true
      };
    case SET_CLEAR:
      return {
        ...state,
        value: "0",
        limitReached: false,
        result: false
      };
    case SET_LIMIT_REACHED:
      return {
        ...state,
        limitReached: true,
        result: false
      };
    default:
      return state;
  }
};

export default calculatorReducer;
