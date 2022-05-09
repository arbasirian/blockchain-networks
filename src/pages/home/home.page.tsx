import React, { memo, useCallback, useEffect, useState } from "react";
import { NextPage } from "next";
import { useSelector } from "react-redux";

import { HomePageProps, SortTypeEnum, StoreModel } from "@models";
import { networkActions } from "@actions";
import { usePromise } from "@hooks";
import { networkSelectors } from "@selectors";
import { Media, NetworkMobileView, NetworkTable } from "@components";
import { networkHelper } from "@helpers";

const HomePage: NextPage<HomePageProps> = ({ networks }) => {
  const promise = usePromise();
  const [sortType, setSortType] = useState<SortTypeEnum>(SortTypeEnum.DEFAULT);

  const sortedList = useSelector((state: StoreModel) =>
    networkSelectors.networksSortedList(state, sortType)
  );
  const updateStatus = () => {
    networkHelper.availableNetworks(networks).forEach(async (item) => {
      await promise(networkActions.connectionStatus(item));
    });
  };

  useEffect(() => {
    if (networks) promise(networkActions.loadAll(networks));
    const interval = setInterval(() => updateStatus(), 300000);
    console.log("here222", 111);
    return () => {
      console.log("here222", 2222);

      clearInterval(interval);
    };
  }, []);

  const handleSortName = () => {
    switch (sortType) {
      case SortTypeEnum.DEFAULT:
        return setSortType(SortTypeEnum.ASC);
      case SortTypeEnum.ASC:
        return setSortType(SortTypeEnum.DESC);
      case SortTypeEnum.DESC:
        return setSortType(SortTypeEnum.DEFAULT);
      default:
        return setSortType(SortTypeEnum.DEFAULT);
    }
  };

  return (
    <div className="container">
      <h1>Blockchain Networks</h1>
      <Media lessThan="tablet">
        <NetworkMobileView
          sortType={sortType}
          onSort={setSortType}
          data={sortedList}
        />
      </Media>
      <Media greaterThan="mobile">
        <NetworkTable
          sortType={sortType}
          onSort={handleSortName}
          data={sortedList}
        />
      </Media>
    </div>
  );
};

export default HomePage;
