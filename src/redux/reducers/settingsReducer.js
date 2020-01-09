import {
  SET_BACKGROUND_IMAGE,
  SET_VISIBILITY
} from "../constants/settingsConstants";

const initialState = {
  backgroundImage: "https://images.unsplash.com/photo-1460411794035-42aac080490a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  visible: false
};

export const settingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BACKGROUND_IMAGE:
      return {
        ...state,
        backgroundImage: action.payload
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