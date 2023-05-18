import { ReactNode } from 'react';
import { Session } from 'next-auth';
import { DehydratedState } from '@tanstack/react-query';
import { EmotionCache } from '@emotion/react/dist/emotion-react.cjs';

export type AppProvidersProps = {
  children: ReactNode;
  session: Session;
  dehydratedState: DehydratedState;
  emotionCache: EmotionCache;
};
