import {
  SET_ENTER,
  SET_CLEAR,
  SET_LIMIT_REACHED,
  SET_VALUE
} from "../constants/calculatorConstants";

const initialState = {
  value: "0",
  limitReached: false
};

export const calculatorReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_VALUE:
      return {
        ...state,
        value: action.payload
      };
    case SET_ENTER:
      return {
        ...state,
        value: eval(state.value)
      };
    case SET_CLEAR:
      return {
        ...state,
        value: "0",
        limitReached: false
      };
    case SET_LIMIT_REACHED:
      return {
        ...state,
        limitReached: true
      };
    default:
      return state;
  }
};

export default calculatorReducer;
