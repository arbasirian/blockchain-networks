import { dispatchHelper } from '@helpers';
import { useDispatch } from 'react-redux';

const usePromise = () => {
  const dispatch = useDispatch();

  return (args: any) => dispatchHelper(dispatch, args);
};

export default usePromise;
