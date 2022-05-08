import { networkActionTypes } from "@actionTypes";
import { NetworkStateModel } from "@models";

const initialState: NetworkStateModel = {
  all: [],
};

function appReducer(state = initialState, action) {
  switch (action.type) {
    case networkActionTypes.LOAD_ALL_NETWORKS:
      return state;

    default:
      return state;
  }
}

export default appReducer;
