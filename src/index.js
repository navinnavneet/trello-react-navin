import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import boardsReducer from "./store/reducers/boardsReducer";
import listsReducer from "./store/reducers/listsReducer";
import cardsReducer from "./store/reducers/cardsReducer";
import checklistsReducer from "./store/reducers/checklistsReducer";
import checkItemsReducer from "./store/reducers/checkItemsReducer";
import { BrowserRouter } from "react-router-dom";

const rootReducer = combineReducers({
  boardsReducer,
  listsReducer,
  cardsReducer,
  checklistsReducer,
  checkItemsReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
