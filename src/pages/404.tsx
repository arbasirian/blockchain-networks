import React from 'react';

import dynamic from 'next/dynamic';

const Error_404Page = dynamic(() => import('@pages/_errors/error_404'), {
  ssr: false,
});

const Error404 = () => {
  return <Error_404Page />;
};

export default Error404;
