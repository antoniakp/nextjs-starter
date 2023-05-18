import React, { useMemo } from 'react';
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { ApiClientContext, ApiClientContextValue, ApiClientControllerProps } from 'context';
import axiosClient from '../../../api/axios';

export const ApiClientContextController = ({ children, dehydratedState }: ApiClientControllerProps) => {
  const queryClient = useMemo(
    () => new QueryClient({ defaultOptions: { queries: { refetchOnWindowFocus: false } } }),
    [],
  );

  // const client = useMemo(() => {
  //   const axios = Axios.create({
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   });
  //
  //   axios.interceptors.request.use(requestSuccessInterceptor);
  //   axios.interceptors.response.use(responseSuccessInterceptor, responseFailureInterceptor);
  //
  //   return axios;
  // }, []);

  const ctx: ApiClientContextValue = { client: axiosClient };

  return (
    <ApiClientContext.Provider value={ctx}>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={dehydratedState}>
          {children}
          <ReactQueryDevtools />
        </Hydrate>
      </QueryClientProvider>
    </ApiClientContext.Provider>
  );
};
