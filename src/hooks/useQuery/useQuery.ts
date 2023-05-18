import { QueryKey, useQuery as useRQQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query';

import { useApiClient } from '../useApiClient/useApiClient';
import { AxiosQueriesType, queries } from 'api/actions';
import { DataForQuery, GetQueryParams } from 'types';
import { parseQueryKey } from 'utils';

export const useQuery = <Key extends keyof AxiosQueriesType, TError = unknown>({
  query,
  args,
  options,
}: {
  query: Key;
  args?: GetQueryParams<Key>;
  options?: UseQueryOptions<DataForQuery<Key>, TError>;
}) => {
  const { client } = useApiClient();
  const queryFn = queries[query](client);
  const queryKey: QueryKey = parseQueryKey(query, args);

  const result = useRQQuery(
    queryKey,
    async () => await queryFn(args || ({} as GetQueryParams<Key>)),
    // eslint-disable-next-line
    options as any) as UseQueryResult<
    DataForQuery<Key>,
    TError
  >;

  // TODO consider if we want to maintain this hack long term
  return { ...result, isLoadingAndEnabled: result.isLoading && result.fetchStatus !== 'idle' };
};
