import {
  SET_VALUE,
  SET_LIMIT_REACHED,
  SET_CLEAR,
  SET_ENTER,
  SET_ERROR,
  SET_UNDO,
  SET_REDO
} from "../constants/calculatorConstants";

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
    type: SET_CLEAR
  };
};

export const setEnter = value => {
  return {
    type: SET_ENTER,
    payload: value
  };
};

export const setError = () => {
  return {
    type: SET_ERROR
  };
};

export const setUndo = (end, newValue) => {
  return {
    type: SET_UNDO,
    payload: {
      end,
      newValue
    }
  };
};

export const setRedo = (newValue) => {
  return {
    type: SET_REDO,
    payload:newValue
  };
};