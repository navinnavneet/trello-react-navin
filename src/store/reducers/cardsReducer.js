import * as actionTypes from "../actionTypes";

const initialState = {
  cards: {},
  isLoading: false,
  error: null,
};

export default function cardsReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_CARDS_INIT:
      return {
        ...state,
        isLoading: true,
      };

    case actionTypes.GET_CARDS_SUCCESS:
      const cardsNew = { ...state.cards };
      cardsNew[action.payload.id] = action.payload.cards;
      return {
        ...state,
        isLoading: false,
        cards: cardsNew,
      };

    case actionTypes.GET_CARDS_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    case actionTypes.CREATE_CARD:
      const newCards = { ...state.cards };
      const newCardsArr = [...newCards[action.payload.id]];
      newCardsArr.push(action.payload.card);
      newCards[action.payload.id] = newCardsArr;
      return {
        ...state,
        cards: newCards,
      };

    case actionTypes.DELETE_CARD:
      const updatedCards = { ...state.cards };
      const updatedCardsArr = updatedCards[action.payload.listId].filter(
        (card) => card.id !== action.payload.id
      );
      updatedCards[action.payload.listId] = updatedCardsArr;
      return {
        ...state,
        cards: updatedCards,
      };

    default:
      return state;
  }
}
