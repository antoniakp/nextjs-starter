/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  QueryKey,
  useInfiniteQuery as useRQInfiniteQuery,
  UseInfiniteQueryOptions,
  UseInfiniteQueryResult,
} from '@tanstack/react-query';

import { useApiClient } from 'hooks/useApiClient/useApiClient';
import { DataForQuery, GetQueryParams } from 'types';
import { AxiosQueriesType, queries } from 'api/actions';

export const useInfiniteQuery = <Key extends keyof AxiosQueriesType, TError = unknown>({
  query,
  args,
  options,
}: {
  query: Key;
  args?: GetQueryParams<Key>;
  options?: UseInfiniteQueryOptions<DataForQuery<Key>, TError>;
}) => {
  const { client } = useApiClient();
  const queryFn = queries[query](client);
  const queryKey: QueryKey = [query];

  return useRQInfiniteQuery(
    queryKey,
    async ({ pageParam }: { pageParam?: string }) =>
      await queryFn({ pageParam, ...(args || {}) } as GetQueryParams<Key>),
    options as any,
  ) as UseInfiniteQueryResult<DataForQuery<Key>, TError>;
};
