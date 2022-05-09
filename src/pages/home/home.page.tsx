import React, { useEffect, useState } from "react";
import { NextPage } from "next";
import { useSelector } from "react-redux";

import { HomePageProps, SortTypeEnum, StoreModel } from "@models";
import { networkActions } from "@actions";
import { usePromise } from "@hooks";
import { networkSelectors } from "@selectors";
import { Media, NetworkMobileView, NetworkTable, Spinner } from "@components";
import { networkHelper } from "@helpers";

import styles from "./home.module.scss";

const HomePage: NextPage<HomePageProps> = ({ networks }) => {
  const promise = usePromise();
  const [sortType, setSortType] = useState<SortTypeEnum>(SortTypeEnum.DEFAULT);
  const [firstLoading, setFirstLoading] = useState<boolean>(true);

  const sortedList = useSelector((state: StoreModel) =>
    networkSelectors.networksSortedList(state, sortType)
  );
  const updateStatus = () => {
    networkHelper.availableNetworks(networks).forEach(async (item) => {
      await promise(networkActions.connectionStatus(item));
    });
  };

  useEffect(() => {
    if (networks) {
      promise(networkActions.loadAll(networks));
      setTimeout(() => setFirstLoading(false), 1000);
    }
    const interval = setInterval(() => updateStatus(), 300000);
    return () => {
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

      {firstLoading ? (
        <div className={styles.spinner_wrapper}>
          <Spinner />
        </div>
      ) : (
        <>
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
        </>
      )}
    </div>
  );
};

export default HomePage;
