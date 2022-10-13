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
    payload: { card: card, id: id },
  };
}

export function createCard(name, id) {
  return function (dispatch) {
    apiCalls.createCard(name, id).then((data) => {
      dispatch(createCardSuccess(data, id));
    });
  };
}

export function deleteCardSuccess(id, listId) {
  return {
    type: actionTypes.DELETE_CARD,
    payload: { id, listId },
  };
}

export function deleteCard(id, listId) {
  return function (dispatch) {
    apiCalls
      .deleteCard(id)
      .then((res) => dispatch(deleteCardSuccess(id, listId)));
  };
}

// Checklists

export function getChecklistsInit() {
  return {
    type: actionTypes.GET_CHECKLISTS_INIT,
  };
}

export function getChecklistsSuccess(cards) {
  return {
    type: actionTypes.GET_CHECKLISTS_SUCCESS,
    payload: cards,
  };
}

export function getChecklistsFail(err) {
  return {
    type: actionTypes.GET_CHECKLISTS_FAIL,
    payload: err,
  };
}

export function getChecklists(id) {
  return function (dispatch) {
    dispatch(getChecklistsInit());
    apiCalls
      .getChecklists(id)
      .then((data) => {
        dispatch(getChecklistsSuccess(data));
      })
      .catch((err) => {
        dispatch(getChecklistsFail(err));
      });
  };
}

export function createChecklistSuccess(card) {
  return {
    type: actionTypes.CREATE_CHECKLIST,
    payload: card,
  };
}

export function createChecklist(id, name) {
  return function (dispatch) {
    apiCalls.createChecklist(id, name).then((data) => {
      dispatch(createChecklistSuccess(data));
    });
  };
}

export function deleteChecklistSuccess(id) {
  return {
    type: actionTypes.DELETE_CHECKLIST,
    payload: id,
  };
}

export function deleteChecklist(id) {
  return function (dispatch) {
    apiCalls
      .deleteChecklist(id)
      .then((res) => dispatch(deleteChecklistSuccess(id)));
  };
}

// CheckItems

export function getCheckItemsInit() {
  return {
    type: actionTypes.GET_CHECKITEMS_INIT,
  };
}

export function getCheckItemsSuccess(checkItems, idChecklist) {
  return {
    type: actionTypes.GET_CHECKITEMS_SUCCESS,
    payload: { checkItems, idChecklist },
  };
}

export function getCheckItemsFail(err) {
  return {
    type: actionTypes.GET_CHECKITEMS_FAIL,
    payload: err,
  };
}

export function getCheckItems(id) {
  return function (dispatch) {
    dispatch(getCheckItemsInit());
    apiCalls
      .getCheckItems(id)
      .then((data) => {
        dispatch(getCheckItemsSuccess(data, id));
      })
      .catch((err) => {
        dispatch(getCheckItemsFail(err));
      });
  };
}

export function createCheckItemSuccess(checkItem, id) {
  return {
    type: actionTypes.CREATE_CHECKITEM,
    payload: { checkItem, id },
  };
}

export function createCheckItem(name, id) {
  return function (dispatch) {
    apiCalls.createCheckItem(name, id).then((data) => {
      dispatch(createCheckItemSuccess(data, id));
    });
  };
}

export function deleteCheckItemSuccess(id, idChecklist) {
  return {
    type: actionTypes.DELETE_CHECKITEM,
    payload: { id, idChecklist },
  };
}

export function deleteCheckItem(id, idChecklist) {
  return function (dispatch) {
    apiCalls
      .deleteCheckItem(id, idChecklist)
      .then((res) => dispatch(deleteCheckItemSuccess(id, idChecklist)));
  };
}

export function updateCheckItemSuccess(id, idChecklist, value) {
  return {
    type: actionTypes.UPDATE_CHECKITEM,
    payload: { id, idChecklist, value },
  };
}

export function updateCheckItem(id, idCard, idChecklist, value) {
  return function (dispatch) {
    apiCalls
      .updateItemOnCheckList(id, idCard, idChecklist, value)
      .then((res) => dispatch(updateCheckItemSuccess(id, idChecklist, value)));
  };
}
