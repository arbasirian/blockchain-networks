import { NetworkItemModel, NetworkMapItemModel } from "@models";

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
}): Map<string, NetworkMapItemModel> => {
  const networkMap = new Map<string, NetworkMapItemModel>();

  if (typeof networks === "undefined") return networkMap;

  Object.keys(networks).map((network) => {
    if (validateNetwork(networks[network]))
      return networkMap.set(network, { ...networks[network], key: network });
  });
  return networkMap;
};

export default {
  validateNetwork,
  convertToMap,
};
