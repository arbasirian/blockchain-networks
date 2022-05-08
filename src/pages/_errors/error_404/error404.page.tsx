import React, { FC } from "react";

import styles from "./error_404.module.scss";

const Error404Page: FC = () => {
  return (
    <div>
      <p className={styles.text}>404 - Page Not Found</p>
    </div>
  );
};

export default Error404Page;
