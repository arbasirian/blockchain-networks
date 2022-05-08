import { createSelector } from "reselect";
import { StoreModel } from "@models";

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

export const networkKeys = createSelector([selectNetwork], (network) =>
  [...network.all].map((item) => {
    const [key] = item;
    return key;
  })
);
