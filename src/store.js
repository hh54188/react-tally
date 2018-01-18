import { createStore, applyMiddleware, combineReducers } from "redux";

import counter from "./Counter/reducers/counter";

const store = createStore(
  combineReducers({
    counter
  })
);

export default store;
