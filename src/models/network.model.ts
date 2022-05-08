import { FetchingDataType } from "@models";

export interface NetworkStateModel {
  all: Map<string, NetworkMapItemModel>;
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

export interface NetworkMapItemModel extends Partial<NetworkItemModel> {
  key: string;
}
