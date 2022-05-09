import { networkActionTypes } from "@actionTypes";
import { NetworkItemModel } from "@models";

export function loadAll(networks: { [key: string]: NetworkItemModel }) {
  return {
    type: networkActionTypes.LOAD_ALL_NETWORKS,
    payload: networks,
  };
}

export function connectionStatus(key: string) {
  return {
    type: networkActionTypes.LOAD_NETWORK_CONNECTION_STATUS,
    method: "get",
    url: `check/${key}`,
    key,
  };
}
