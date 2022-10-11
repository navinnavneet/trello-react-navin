import * as actionTypes from "../actionTypes";

const initialState = {
  lists: [],
  isLoading: false,
  error: null,
};

export default function listsReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_LISTS_INIT:
      return {
        ...state,
        isLoading: true,
      };

    case actionTypes.GET_LISTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        lists: action.payload,
      };

    case actionTypes.GET_LISTS_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    case actionTypes.CREATE_LIST:
      const newLists = [...state.lists];
      newLists.push(action.payload);
      return {
        ...state,
        lists: newLists,
      };

    case actionTypes.DELETE_LIST:
      const updatedLists = state.lists.filter(
        (list) => list.id !== action.payload
      );
      return {
        ...state,
        lists: updatedLists,
      };

    default:
      return state;
  }
}
