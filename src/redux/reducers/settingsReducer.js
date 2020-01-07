import {
  SET_BACKGROUND_COLOR,
  SET_VISIBILITY
} from "../constants/settingsConstants";

const initialState = {
  backgroundColor: "rgb(230,230,250, 0.7)",
  visible: false
};

export const settingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BACKGROUND_COLOR:
      return {
        ...state,
        backgroundColor: action.payload
      };
    case SET_VISIBILITY:
      return {
        ...state,
        visible: !state.visible
      };
    default:
      return state;
  }
};