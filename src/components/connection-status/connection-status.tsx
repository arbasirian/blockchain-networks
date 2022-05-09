import React, { FC } from "react";

import { Spinner } from "@components";

import styles from "./connection-status.module.scss";

type props = {
  status?: boolean;
  spin?: boolean;
};
const ConnectionStatus: FC<props> = ({ status, spin }) => {
  return (
    <>
      {spin ? (
        <Spinner />
      ) : (
        <div
          className={[
            styles.rectangle,
            status ? styles.rectangle_active : styles.rectangle_deactive,
          ].join(" ")}
        />
      )}
    </>
  );
};

export default ConnectionStatus;
