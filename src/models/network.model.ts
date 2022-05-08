import { FetchingDataType } from "@models";

export interface NetworkStateModel {
  all: Map<string, Partial<NetworkItemModel>>;
}

export interface NetworkItemModel {
  ss58Format: number;
  paraId: number;
  tokenDecimals: number[];
  tokenSymbols: string[];
  connected: boolean;
  relayChain: string;
  nativeToken: string;
  icon: string;
  name: string;
  node: string;
}

export interface NetworksObjectModel {
  [key: string]: Partial<NetworkItemModel>;
}

export interface NetworkListItemModel {
  key: string;
  network: Partial<NetworkItemModel>;
}
