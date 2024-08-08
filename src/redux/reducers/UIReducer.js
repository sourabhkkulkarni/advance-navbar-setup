import { SET_IS_LOADING } from "../actions/UIActions";

export const initialUIState = {
  isLoading: false,
};

export function UIReducer(state, action) {
  switch (action.type) {
    case SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };

    default:
      return initialUIState;
  }
}


// comment