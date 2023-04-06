import { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { ComponentType } from 'react';
import Navigate from './Navigate';
import { useAppSelector } from 'src/redux/store';

type IntrinsicAttributes = EmotionJSX.IntrinsicAttributes;

function WithAuth<T extends IntrinsicAttributes>(WrappedComponent: ComponentType<T>) {
  return function ComponentWithAuth(props: T) {
    const { refreshToken, userState } = useAppSelector((s) => ({
      refreshToken: s.auth.refreshToken,
      userState: s.user.data,
    }));
    
    if (!refreshToken || userState?.status !== 1) return <Navigate to='/login' />;

    return (
      <WrappedComponent {...props} />
    );
  };
}

export default WithAuth;
