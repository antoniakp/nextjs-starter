import { CssBaseline, ThemeProvider } from '@mui/material';
import { SessionProvider } from 'next-auth/react';
import { CacheProvider } from '@emotion/react';

import { ApiClientContextController } from 'context';
import { theme } from '../styles';

import { AppProvidersProps } from './AppProviders.types';

export const AppProviders = ({ children, session, emotionCache, dehydratedState }: AppProvidersProps) => (
  <SessionProvider session={session}>
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ApiClientContextController dehydratedState={dehydratedState}>{children}</ApiClientContextController>
      </ThemeProvider>
    </CacheProvider>
  </SessionProvider>
);
