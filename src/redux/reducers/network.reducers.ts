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
    case networkActionTypes.LOAD_NETWORK_CONNECTION_STATUS_REQUESTING:
      return {
        ...state,
        all: state.all.set(action.key, {
          ...state.all.get(action.key),
          updating: true,
        }),
      };
    case networkActionTypes.LOAD_NETWORK_CONNECTION_STATUS_SUCCESS:
      return {
        ...state,
        all: state.all.set(action.key, {
          ...state.all.get(action.key),
          connected: !action.payload,
          updating: false,
        }),
      };
    case networkActionTypes.LOAD_NETWORK_CONNECTION_STATUS_FAILURE:
      return {
        ...state,
        all: state.all.set(action.key, {
          ...state.all.get(action.key),
          updating: false,
        }),
      };

    default:
      return state;
  }
}

export default appReducer;
