import { ReactNode } from 'react';
import { DehydratedState } from '@tanstack/react-query';

export type ApiClientControllerProps = {
  children: ReactNode;
  dehydratedState: DehydratedState;
};
