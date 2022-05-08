import React, { useEffect } from "react";
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
    if (networks) promise(networkActions.loadAll(networks));
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
