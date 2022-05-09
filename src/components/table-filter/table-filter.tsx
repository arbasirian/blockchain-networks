import React, { FC } from "react";

import Arrow from "public/arrow.svg";

import styles from "./table-filter.module.scss";
import { SortTypeEnum } from "@models";

type Props = {
  type: SortTypeEnum;
};
const TableFilter: FC<Props> = ({ type }) => {
  return (
    <div className={styles.filter_wrapper}>
      <Arrow />
    </div>
  );
};

export default TableFilter;
