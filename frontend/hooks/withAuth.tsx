import { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { ComponentType } from 'react';
import { useAppSelector } from 'src/redux/store';
import Navigate from './Navigate';

type IntrinsicAttributes = EmotionJSX.IntrinsicAttributes;

function WithAuth<T extends IntrinsicAttributes>(WrappedComponent: ComponentType<T>) {
  return function ComponentWithAuth(props: T) {
    const { userState } = useAppSelector((s) => ({
      userState: s.user.data,
    }));
    
    // if (userState?.username === undefined) return <Navigate to='/login' />;
    
    return (
      <WrappedComponent {...props} />
    );
  };
}

export default WithAuth;
