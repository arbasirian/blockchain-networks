import React, { FC, useMemo } from "react";

import { NetworkListItemModel, SortTypeEnum } from "@models";
import { NetworkMobileViewRow } from "@components";

import styles from "./network-mobile-view.module.scss";

type Props = {
  data: NetworkListItemModel[];
  onSort: (type: SortTypeEnum) => void;
  sortType: SortTypeEnum;
};
const NetworkMobileView: FC<Props> = ({ data, onSort, sortType }) => {
  return (
    <>
      <div className={styles.sort_wrapper}>
        Sort Name By:
        <select
          title="sort with name"
          placeholder="Select Sort Type"
          value={sortType}
          onChange={(e) => onSort(e.target.value as SortTypeEnum)}
        >
          <option value="ASC">ASC</option>
          <option value="DESC">DESC</option>
          <option value="DEFAULT">DEFAULT</option>
        </select>
      </div>
      {data.map((item, index) => (
        <NetworkMobileViewRow
          key={[item.key, index].join("_")}
          details={item.network}
        />
      ))}
    </>
  );
};

export default NetworkMobileView;
