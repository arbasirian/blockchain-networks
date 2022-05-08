import React, { useEffect, useState } from "react";
import { NextPage } from "next";
import { useSelector } from "react-redux";

import { HomePageProps } from "@models";
import { networkActions } from "@actions";
import { usePromise } from "@hooks";
import { networkSelectors } from "@selectors";
import { Media, NetworkMobileView, NetworkTable } from "@components";

const HomePage: NextPage<HomePageProps> = ({ networks }) => {
  const promise = usePromise();
  const list = useSelector(networkSelectors.networksList);
  const keys = useSelector(networkSelectors.networkKeys);

  useEffect(() => {
    if (networks) {
      promise(networkActions.loadAll(networks));
    }
  }, []);

  useEffect(() => {
    function getStatus() {
      Promise.all([
        keys.map((item) => promise(networkActions.connectionStatus(item))),
      ]);
      console.log("1111", 1111);
    }
    getStatus();
    const interval = setInterval(() => getStatus(), 10000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="container">
      <h1>Blockchain Networks</h1>
      <Media lessThan="tablet">
        <NetworkMobileView />
      </Media>
      <Media greaterThan="mobile">
        <NetworkTable data={list} />
      </Media>
    </div>
  );
};

export default HomePage;
