import React, { memo, useEffect, useState } from "react";
import { NextPage } from "next";
import { useSelector } from "react-redux";

import { HomePageProps, SortTypeEnum, StoreModel } from "@models";
import { networkActions } from "@actions";
import { usePromise } from "@hooks";
import { networkSelectors } from "@selectors";
import { Media, NetworkMobileView, NetworkTable } from "@components";

const HomePage: NextPage<HomePageProps> = ({ networks }) => {
  const promise = usePromise();
  const [intervalStatus, setIntervalStatus] = useState(false);
  const [sortType, setSortType] = useState<SortTypeEnum>(SortTypeEnum.DEFAULT);

  const list = useSelector(networkSelectors.networksList);
  const keys = useSelector(networkSelectors.networkKeys);
  const sortedList = useSelector((state: StoreModel) =>
    networkSelectors.networksSortedList(state, sortType)
  );

  useEffect(() => {
    if (networks) promise(networkActions.loadAll(networks));
  }, []);

  useEffect(() => {
    if (intervalStatus) return;
    if (typeof keys === "undefined") return;

    const updateStatus = () => {
      keys.forEach(async (item) => {
        await promise(networkActions.connectionStatus(item));
      });
    };
    const interval = setInterval(() => updateStatus(), 10000);
    setIntervalStatus(true);
    return () => {
      clearInterval(interval);
    };
  }, [keys]);

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

const areEqual = (prevProps: HomePageProps, nextProps: HomePageProps) => {
  if (prevProps.networks !== nextProps.networks) return false;

  return true;
};
export default memo(HomePage, areEqual);
