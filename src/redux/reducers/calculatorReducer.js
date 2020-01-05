/* eslint no-eval: 0 */
import {
  SET_ENTER,
  SET_CLEAR,
  SET_LIMIT_REACHED,
  SET_VALUE,
  SET_ERROR
} from "../constants/calculatorConstants";

const initialState = {
  value: "0",
  limitReached: false,
  result: false,
  error: false
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
        result: false,
        error:false
      };
    case SET_LIMIT_REACHED:
      return {
        ...state,
        limitReached: true,
        result: false,
        error:false
      };
      case SET_ERROR:
        return {
          ...state,
          error:true
        };
    default:
      return state;
  }
};

export default calculatorReducer;
