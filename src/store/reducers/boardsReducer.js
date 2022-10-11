import * as actionTypes from "../actionTypes";

const initialState = {
  boards: [],
  isLoading: false,
  error: null,
};

export default function boardsReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_BOARDS_INIT:
      return {
        ...state,
        isLoading: true,
      };

    case actionTypes.GET_BOARDS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        boards: action.payload,
      };

    case actionTypes.GET_BOARDS_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    case actionTypes.CREATE_BOARD_SUCCESS:
      const newBoards = [...state.boards];
      newBoards.push(action.payload);
      return {
        ...state,
        boards: newBoards,
      };
    default:
      return state;
  }
}
