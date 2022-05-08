import React, { FC } from 'react';

import styles from './error_500.module.scss';

const Error500Page: FC = () => {
  return (
    <div>
      <p className={styles.text}>Error_500</p>
    </div>
  );
};

export default Error500Page;