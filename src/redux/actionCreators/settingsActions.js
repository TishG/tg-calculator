import { SET_BACKGROUND_IMAGE, SET_VISIBILITY } from "../constants/settingsConstants";

export const setBGImage = imageURL => {
  return {
    type: SET_BACKGROUND_IMAGE,
    payload: imageURL
  };
};

export const setVisibility = () => {
    return {
      type: SET_VISIBILITY,
    };
  };
