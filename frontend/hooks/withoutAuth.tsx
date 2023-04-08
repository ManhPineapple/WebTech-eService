import { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { ComponentType } from 'react';
import Navigate from './Navigate';
import { useAppSelector } from 'src/redux/store';

type IntrinsicAttributes = EmotionJSX.IntrinsicAttributes;

function WithoutAuth<T extends IntrinsicAttributes>(WrappedComponent: ComponentType<T>) {
  return function ComponentWithoutAuth(props: T) {
    const {  userState } = useAppSelector((s) => ({
      userState: s.user.data,
    }));

    console.log(userState);
    
    
    if (userState?.username !== undefined) return <Navigate to='/' />;

    return <WrappedComponent {...props} />;
  };
}

export default WithoutAuth;
