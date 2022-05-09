import Image from "next/image";
import React, { FC } from "react";

import { NetworkItemModel } from "@models";
import { ConnectionStatus } from "@components";

import styles from "./network-mobile-view-row.module.scss";

type Props = {
  details: Partial<NetworkItemModel>;
};

const NetworkMobileViewRow: FC<Props> = ({ details }) => {
  return (
    <div className={styles.row_wrapper}>
      <div className={styles.icon_wrapper}>
        <Image
          src={`${process?.env?.NEXT_PUBLIC_BASE_URL}images/${details?.icon}`}
          width={32}
          height={32}
          alt={details?.name || ""}
          priority
        />
      </div>
      <div>
        <div className={styles.row_item}>
          <span>Name:</span>
          {details.name}
        </div>
        <div className={styles.row_item}>
          <span>Status:</span>
          <div className="fit-content">
            <ConnectionStatus
              spin={details?.updating}
              status={details.connected}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NetworkMobileViewRow;
