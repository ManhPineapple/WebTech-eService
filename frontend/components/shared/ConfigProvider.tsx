import { ThemeProvider } from '@emotion/react';
import { App, ConfigProvider as AntdConfigProvider, theme } from 'antd';
import { Suspense } from 'react';
import { useAppSelector } from 'src/redux/store';
import Loader from '../loader/Loader';

type TConfigProviderProps = {
  children: React.ReactNode;
};

const { darkAlgorithm, defaultAlgorithm } = theme;

function ConfigProvider({ children }: TConfigProviderProps) {
  const { mode, colorPrimary, generatedColors } = useAppSelector((s) => s.theme);

  return (
    <Suspense fallback={<Loader />}>
      <AntdConfigProvider
        theme={{
          token: { colorPrimary },
          algorithm: mode === 'dark' ? darkAlgorithm : defaultAlgorithm,
        }}
      >
        <ThemeProvider theme={{ mode, colorPrimary, generatedColors }}>
          <App>{children}</App>
        </ThemeProvider>
      </AntdConfigProvider>
    </Suspense>
  );
}

export default ConfigProvider;
