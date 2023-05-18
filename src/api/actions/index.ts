import { planetQueries } from './planet/planet.queries';
import { planetMutations } from './planet/planet.mutations';
import { authQueries } from './auth/auth.queries';
import { authMutations } from './auth/auth.mutations';

export const queries = {
  ...planetQueries,
  ...authQueries,
} as const;

export type AxiosQueriesType = typeof queries;

export const mutations = {
  ...planetMutations,
  ...authMutations,
} as const;

export type AxiosMutationsType = typeof mutations;
