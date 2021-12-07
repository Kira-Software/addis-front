import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import createSagaMiddleware from "redux-saga";
import employee from "./reducer/employee";
import { watcherSaga } from "./sagas/rootSaga";

const reducer = combineReducers({ employee });

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
const initialstate = {};

const store = createStore(
  reducer,
  initialstate,
  composeWithDevTools(applyMiddleware(...middleware))
);
sagaMiddleware.run(watcherSaga);

export default store;
