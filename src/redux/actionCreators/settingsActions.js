import { SET_BACKGROUND_COLOR, SET_VISIBILITY } from "../constants/settingsConstants";

export const setBGColor = color => {
  return {
    type: SET_BACKGROUND_COLOR,
    payload: color
  };
};

export const setVisibility = () => {
    return {
      type: SET_VISIBILITY,
    };
  };
