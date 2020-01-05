import { SET_VALUE, SET_LIMIT_REACHED, SET_CLEAR, SET_ENTER } from "../constants/calculatorConstants";

export const setValue = val => {
  return {
    type: SET_VALUE,
    payload: val
  };
};

export const setLimitReached = () => {
    return {
      type: SET_LIMIT_REACHED
    };
  };

export const setClear = () => {
    return {
        type:SET_CLEAR
    }
}

export const setEnter = () => {
    return {
        type: SET_ENTER
    }
}
