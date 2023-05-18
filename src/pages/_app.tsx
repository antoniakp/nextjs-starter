import Head from 'next/head';
import { AppProps } from 'next/app';
import { EmotionCache } from '@emotion/react';
import { DehydratedState } from '@tanstack/react-query';
import { Session } from 'next-auth';
import { useEffect, useState } from 'react';

import { createEmotionCache } from 'utils';
import { Layout } from 'components';
import { AppProviders } from '../providers/AppProviders';

const IS_MOCKING_ENABLED = process.env.NEXT_PUBLIC_API_MOCKING === 'enabled';
if (IS_MOCKING_ENABLED) require('../api/msw/setupMocksServer');

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
  pageProps: {
    dehydratedState: DehydratedState;
    session: Session;
  };
}

const clientSideEmotionCache = createEmotionCache();

export default function App(props: MyAppProps) {
  const {
    Component,
    emotionCache = clientSideEmotionCache,
    pageProps: { dehydratedState, session, ...pageProps },
  } = props;
  const [shouldRender, setShouldRender] = useState(!IS_MOCKING_ENABLED);

  useEffect(() => {
    async function initMocks() {
      const { setupBrowserMocks } = await import('../api/msw/setupMocksBrowser');
      await setupBrowserMocks();
      setShouldRender(true);
    }

    if (IS_MOCKING_ENABLED) void initMocks();
  }, []);

  if (!shouldRender) return null;

  return (
    <AppProviders session={session} dehydratedState={dehydratedState} emotionCache={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>Next.js Starter Boilerplate</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppProviders>
  );
}
