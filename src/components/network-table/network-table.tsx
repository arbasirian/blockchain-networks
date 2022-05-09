import React, { FC, useMemo } from "react";

import { NetworkListItemModel, SortTypeEnum } from "@models";
import { NetworkTableRow } from "@components";

import styles from "./network-table.module.scss";

type Props = {
  data: NetworkListItemModel[];
  onSort: () => void;
  sortType: SortTypeEnum;
};
const NetworkTable: FC<Props> = ({ data, onSort, sortType }) => {
  const sortStyle = useMemo(() => {
    if (typeof data === "undefined" || data.length < 1) return "";
    if (sortType === SortTypeEnum.DEFAULT) return styles.default_arrow;
    if (sortType === SortTypeEnum.ASC) return styles.top_arrow;
    return styles.down_arrow;
  }, [sortType]);
  return (
    <table className={styles.full_table}>
      <thead className={styles.table_header}>
        <tr>
          <th>ICON</th>
          <th className={sortStyle} onClick={() => onSort()}>
            NAME
          </th>
          <th>STATUS</th>
        </tr>
      </thead>
      <tbody>
        {data && data.length > 0 ? (
          data.map((item, index) => (
            <NetworkTableRow
              key={[item.key, index].join("_")}
              details={item.network}
            />
          ))
        ) : (
          <tr className={styles.table_body_tr}>
            <td colSpan={3}>No Data Found</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default NetworkTable;
