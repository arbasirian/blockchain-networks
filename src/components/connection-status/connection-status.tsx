import React, { FC } from "react";

import styles from "./connection-status.module.scss";

type props = {
  status: boolean;
};
const ConnectionStatus: FC<props> = ({ status }) => {
  return (
    <div
      className={[
        styles.rectangle,
        status ? styles.rectangle_active : styles.rectangle_deactive,
      ].join(" ")}
    />
  );
};

export default ConnectionStatus;
