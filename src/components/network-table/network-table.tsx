import React, { FC } from "react";

import { NetworkListItemModel } from "@models";
import { NetworkTableRow } from "@components";

import styles from "./network-table.module.scss";

type Props = {
  data: NetworkListItemModel[];
};
const NetworkTable: FC<Props> = ({ data }) => {
  return (
    <table className={styles.full_table}>
      <thead className={styles.table_header}>
        <tr>
          <th>ICON</th>
          <th>NAME</th>
          <th>STATUS</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <NetworkTableRow key={item.key} details={item.network} />
        ))}
      </tbody>
    </table>
  );
};

export default NetworkTable;
