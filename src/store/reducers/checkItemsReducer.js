import * as actionTypes from "../actionTypes";

const initialState = {
  checkItems: {},
  isLoading: false,
  error: null,
};

export default function checkItemsReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_CHECKITEMS_INIT:
      return {
        ...state,
        isLoading: true,
      };

    case actionTypes.GET_CHECKITEMS_SUCCESS:
      const checkItemsNew = { ...state.checkItems };
      checkItemsNew[action.payload.idChecklist] = action.payload.checkItems;
      return {
        ...state,
        isLoading: false,
        checkItems: checkItemsNew,
      };

    case actionTypes.GET_CHECKITEMS_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    case actionTypes.CREATE_CHECKITEM:
      const newCheckItems = { ...state.checkItems };
      const newCheckItemsArr = [...newCheckItems[action.payload.id]];
      newCheckItemsArr.push(action.payload.checkItem);
      newCheckItems[action.payload.id] = newCheckItemsArr;
      return {
        ...state,
        checkItems: newCheckItems,
      };

    case actionTypes.DELETE_CHECKITEM:
      const updatedCheckItems = { ...state.checkItems };
      const updatedCheckItemsArr = updatedCheckItems[
        action.payload.idChecklist
      ].filter((checkItem) => checkItem.id !== action.payload.id);
      updatedCheckItems[action.payload.idChecklist] = updatedCheckItemsArr;
      return {
        ...state,
        checkItems: updatedCheckItems,
      };

    case actionTypes.UPDATE_CHECKITEM:
      console.log("update", action.payload);
      const checkItemsInChecklist = state.checkItems[
        action.payload.idChecklist
      ].reduce((acc, item) => {
        if (item.id !== action.payload.id) {
          acc.push(item);
          return acc;
        }
        const newValue =
          action.payload.value === "complete" ? "incomplete" : "complete";
        const newItem = { ...item, state: newValue };
        acc.push(newItem);
        return acc;
      }, []);

      const allCheckItems = {
        ...state.checkItems,
        [action.payload.idChecklist]: checkItemsInChecklist,
      };

      return {
        ...state,
        checkItems: allCheckItems,
      };

    default:
      return state;
  }
}
