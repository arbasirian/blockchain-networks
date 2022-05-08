import { networkActionTypes } from "@actionTypes";
import { networkHelper } from "@helpers";
import { NetworkStateModel } from "@models";

const initialState: NetworkStateModel = {
  all: new Map(),
};

function appReducer(state = initialState, action) {
  switch (action.type) {
    case networkActionTypes.LOAD_ALL_NETWORKS:
      return {
        ...state,
        all: networkHelper.convertToMap(action.payload),
      };

    default:
      return state;
  }
}

export default appReducer;
