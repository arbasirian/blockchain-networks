import { NetworkItemModel } from "@models";

/**
 * Factory function that validate network for showing in table
 * @param {NetworkItemModel} network
 * @returns {boolean}
 */
const validateNetwork = (network: NetworkItemModel) => {
  if (typeof network === "undefined") return false;
  if (
    typeof network.tokenDecimals === "undefined" ||
    typeof network.tokenSymbols === "undefined"
  )
    return false;
  if (network.tokenDecimals.length > 0 && network.tokenSymbols.length > 0)
    return true;
  return false;
};

/**
 * Factory function that convert object of networks to Map
 * @param { [key: string]: NetworkItemModel } networks
 * @returns
 */
const convertToMap = (networks: {
  [key: string]: NetworkItemModel;
}): Map<string, Partial<NetworkItemModel>> => {
  const networkMap = new Map<string, Partial<NetworkItemModel>>();

  if (typeof networks === "undefined") return networkMap;

  Object.keys(networks).map((network) => {
    if (networks[network] && validateNetwork(networks[network]))
      return networkMap.set(network, networks[network]);
  });
  return networkMap;
};

/**
 * Factory function that convert object of networks to array of network key
 * @param { [key: string]: NetworkItemModel } networks
 * @returns
 */
const availableNetworks = (networks: {
  [key: string]: NetworkItemModel;
}): string[] => {
  return Object.keys(networks)
    .map((network) => {
      if (networks[network] && validateNetwork(networks[network]))
        return network;
      return "";
    })
    .filter((i) => i);
};

export default {
  validateNetwork,
  convertToMap,
  availableNetworks,
};
