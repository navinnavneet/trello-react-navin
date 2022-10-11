import * as actionTypes from "./actionTypes";
import * as apiCalls from "../apiCalls";

// Boards

export function getBoardsInit() {
  return {
    type: actionTypes.GET_BOARDS_INIT,
  };
}

export function getBoardsSuccess(boards) {
  return {
    type: actionTypes.GET_BOARDS_SUCCESS,
    payload: boards,
  };
}

export function getBoardsFail(err) {
  return {
    type: actionTypes.GET_BOARDS_FAIL,
    payload: err,
  };
}

export function getBoards() {
  return function (dispatch) {
    dispatch(getBoardsInit());
    apiCalls
      .fetchBoards()
      .then((data) => {
        dispatch(getBoardsSuccess(data));
      })
      .catch((err) => {
        dispatch(getBoardsFail(err));
      });
  };
}

export function createBoardSuccess(board) {
  return {
    type: actionTypes.CREATE_BOARD_SUCCESS,
    payload: board,
  };
}

export function createBoard(name) {
  return function (dispatch) {
    apiCalls.createBoard(name).then((data) => {
      dispatch(createBoardSuccess(data));
    });
  };
}

// Lists

export function getListsInit() {
  return {
    type: actionTypes.GET_LISTS_INIT,
  };
}

export function getListsSuccess(lists) {
  return {
    type: actionTypes.GET_LISTS_SUCCESS,
    payload: lists,
  };
}

export function getListsFail(err) {
  return {
    type: actionTypes.GET_LISTS_FAIL,
    payload: err,
  };
}

export function getLists(id) {
  return function (dispatch) {
    dispatch(getListsInit());
    apiCalls
      .fetchLists(id)
      .then((data) => {
        dispatch(getListsSuccess(data));
      })
      .catch((err) => {
        dispatch(getListsFail(err));
      });
  };
}

export function createListSuccess(list) {
  return {
    type: actionTypes.CREATE_LIST,
    payload: list,
  };
}

export function createList(name, id) {
  return function (dispatch) {
    apiCalls.createList(name, id).then((data) => {
      dispatch(createListSuccess(data));
    });
  };
}

export function deleteListSuccess(id) {
  return {
    type: actionTypes.DELETE_LIST,
    payload: id,
  };
}

export function deleteList(id) {
  return function (dispatch) {
    apiCalls.deleteList(id).then((res) => dispatch(deleteListSuccess(id)));
  };
}

// Cards

export function getCardsInit() {
  return {
    type: actionTypes.GET_CARDS_INIT,
  };
}

export function getCardsSuccess(id, cards) {
  return {
    type: actionTypes.GET_CARDS_SUCCESS,
    payload: { id: id, cards: cards },
  };
}

export function getCardsFail(err) {
  return {
    type: actionTypes.GET_CARDS_FAIL,
    payload: err,
  };
}

export function getCards(id) {
  return function (dispatch) {
    dispatch(getCardsInit());
    apiCalls
      .getCards(id)
      .then((data) => {
        dispatch(getCardsSuccess(id, data));
      })
      .catch((err) => {
        dispatch(getCardsFail(err));
      });
  };
}

export function createCardSuccess(card, id) {
  return {
    type: actionTypes.CREATE_CARD,
    payload: { card, id },
  };
}

export function createCard(name, id) {
  return function (dispatch) {
    apiCalls.createCard(name, id).then((data) => {
      dispatch(createListSuccess(data));
    });
  };
}

export function deleteCardSuccess(id) {
  return {
    type: actionTypes.DELETE_CARD,
    payload: id,
  };
}

export function deleteCard(id) {
  return function (dispatch) {
    apiCalls.deleteCard(id).then((res) => dispatch(deleteListSuccess(id)));
  };
}
