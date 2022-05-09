import React, { FC } from "react";
import Image from "next/image";

import { NetworkItemModel } from "@models";
import { ConnectionStatus } from "@components";

import styles from "./network-table-row.module.scss";

type Props = {
  details: Partial<NetworkItemModel>;
};
const NetworkTableRow: FC<Props> = ({ details }) => {
  return (
    <tr className={styles.table_body_tr}>
      <td className={styles.icon_wrapper}>
        {details?.icon && (
          <Image
            src={`${process?.env?.NEXT_PUBLIC_BASE_URL}images/${details?.icon}`}
            width={32}
            height={32}
            alt={details?.name || ""}
            priority
          />
        )}
      </td>
      <td className={styles.table_td}>{details.name}</td>
      <td className={styles.table_td}>
        <ConnectionStatus spin={details?.updating} status={details.connected} />
      </td>
    </tr>
  );
};

export default NetworkTableRow;
