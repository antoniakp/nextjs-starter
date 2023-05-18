import { QueryClient } from '@tanstack/react-query';

import { AxiosMutationsType, AxiosQueriesType, mutations, queries } from 'api/actions';
import { GetQueryParams } from 'types';
import axiosClient from '../api/axios';
import { GetMutationParams } from '../hooks/useMutation/useMutation.types';

import { parseQueryKey } from './parseQueryKey';

export class PrefetchQuery<Key extends keyof AxiosQueriesType> {
  constructor(public query: Key, public args: GetQueryParams<Key>) {}
}

export const ssrQuery = <Key extends keyof AxiosQueriesType, Params extends GetQueryParams<Key>>(
  name: Key,
  args: Params,
): ReturnType<ReturnType<AxiosQueriesType[Key]>> => {
  const query = queries[name](axiosClient);

  return query(args) as ReturnType<ReturnType<AxiosQueriesType[Key]>>;
};

export const ssrMutation = <Key extends keyof AxiosMutationsType, Params extends GetMutationParams<Key>>(
  name: Key,
  args: Params,
): ReturnType<ReturnType<AxiosMutationsType[Key]>> => {
  const mutation = mutations[name](axiosClient);
  return mutation(args) as ReturnType<ReturnType<AxiosMutationsType[Key]>>;
};

export const prefetchQueries: <Key extends keyof AxiosQueriesType>(
  givenQueries: PrefetchQuery<Key>[],
) => Promise<QueryClient> = async (givenQueries) => {
  const queryClient = new QueryClient();
  await Promise.all(
    givenQueries.map(({ query, args }) => {
      const parsedKey = parseQueryKey(query, args);

      return queryClient.prefetchQuery(parsedKey, async () => ssrQuery(query, args));
    }),
  );
  return queryClient;
};
