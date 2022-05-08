import { createWrapper } from "next-redux-wrapper";
import {
  applyMiddleware,
  createStore,
  Middleware,
  Store,
  StoreEnhancer,
} from "redux";
import createSagaMiddleware, { Task } from "redux-saga";

import rootReducer from "./reducers";
import rootSaga from "./sagaWatchers";

export interface SagaStore extends Store {
  sagaTask?: Task;
}

const bindMiddleware = (middleware: Middleware[]): StoreEnhancer => {
  if (process.env.NODE_ENV !== "production") {
    const { composeWithDevTools } = require("redux-devtools-extension");
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

export const makeStore = () => {
  // 1: Create the middleware
  const sagaMiddleware = createSagaMiddleware();

  // 2: Add an extra parameter for applying middleware:
  const store = createStore(rootReducer, bindMiddleware([sagaMiddleware]));

  // 3: Run your sagas on server
  (store as SagaStore).sagaTask = sagaMiddleware.run(rootSaga);

  // 4: now return the store:
  return store;
};

export const wrapper = createWrapper<Store>(makeStore, { debug: false });
