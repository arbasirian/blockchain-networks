import React from 'react';

import dynamic from 'next/dynamic';

const Error_500Page = dynamic(() => import('@pages/_errors/error_500'), {
  ssr: false,
});

const Error500 = () => {
  return <Error_500Page />;
};

export default Error500;
