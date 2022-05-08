import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "redux";

import network from "./network.reducers";

const combinedReducer = combineReducers({
  network,
});

const reducer = (state, action) => {
  if (action.type === "DESTROY_SESSION") state = undefined;
  return combinedReducer(state, action);
};

export default reducer;
