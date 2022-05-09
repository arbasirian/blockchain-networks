import { createSelector } from "reselect";
import { SortTypeEnum, StoreModel } from "@models";
import { networkActions } from "@actions";

const selectNetwork = (state: StoreModel) => state.network;

export const networksMap = createSelector(
  [selectNetwork],
  (network) => network.all
);

export const networksList = createSelector([selectNetwork], (network) =>
  [...network.all].map((item) => {
    const [key, network] = item;
    return { key, network };
  })
);

export const networksSortedList = createSelector(
  [selectNetwork, (_: StoreModel, sortType: SortTypeEnum) => sortType],
  (network, sortType: SortTypeEnum) => {
    const networks = [...network.all].map((item) => {
      const [key, network] = item;
      return { key, network };
    });

    if (sortType === SortTypeEnum.DEFAULT) return networks;

    return networks.sort((a, b) =>
      sortType === "ASC"
        ? a.key.localeCompare(b.key)
        : b.key.localeCompare(a.key)
    );
  }
);

export const networkKeys = createSelector([selectNetwork], (network) =>
  [...network.all]
    .map((item) => {
      const [key] = item;
      return key;
    })
    .filter((i) => typeof i !== "undefined")
);
