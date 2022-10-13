import * as actionTypes from "../actionTypes";

const initialState = {
  checklists: [],
  isLoading: false,
  error: null,
};

export default function checklistsReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_CHECKLISTS_INIT:
      return {
        ...state,
        isLoading: true,
      };

    case actionTypes.GET_CHECKLISTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        checklists: action.payload,
      };

    case actionTypes.GET_CHECKLISTS_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    case actionTypes.CREATE_CHECKLIST:
      const newCheckLists = [...state.checklists];
      newCheckLists.push(action.payload);
      return {
        ...state,
        checklists: newCheckLists,
      };

    case actionTypes.DELETE_CHECKLIST:
      const updatedCheckLists = state.checklists.filter(
        (checklist) => checklist.id !== action.payload
      );
      return {
        ...state,
        checklists: updatedCheckLists,
      };

    default:
      return state;
  }
}
