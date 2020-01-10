import {
  SET_ENTER,
  SET_CLEAR,
  SET_LIMIT_REACHED,
  SET_VALUE,
  SET_ERROR,
  SET_UNDO,
  SET_REDO
} from "../constants/calculatorConstants";

const initialState = {
  onBackStorage: [],
  value: "0",
  limitReached: false,
  result: false,
  error: false
};

export const calculatorReducer = (state = initialState, action) => {
  console.log("onBackStorage", state.onBackStorage);
  console.log("value", state.value);
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
        value: `${action.payload}`,
        limitReached: false,
        result: true
      };
    case SET_CLEAR:
      return {
        ...state,
        value: "0",
        limitReached: false,
        result: false,
        error: false
      };
    case SET_LIMIT_REACHED:
      return {
        ...state,
        limitReached: true,
        result: false,
        error: false
      };
    case SET_ERROR:
      return {
        ...state,
        error: true
      };
    case SET_UNDO:
      return {
        ...state,
        onBackStorage: [...state.onBackStorage, action.payload]
      };
    case SET_REDO:
      return {
        ...state
      };
    default:
      return state;
  }
};

export default calculatorReducer;
