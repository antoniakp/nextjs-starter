import { AxiosInstance } from 'axios';
import { stringify } from 'qs';

import { GetPlanetsResponse, Planet } from './planet.types';

export const planetQueries = {
  getPlanets: (client: AxiosInstance) => async () => (await client.get<GetPlanetsResponse>(`/planets`)).data,
  getPlanetsInfinite:
    (client: AxiosInstance) =>
    async ({ pageParam = '1' }) => {
      const queryParams = stringify({ page: pageParam }, { addQueryPrefix: true });

      return (await client.get<GetPlanetsResponse>(`/planets/${queryParams}`)).data;
    },
  getPlanetById:
    (client: AxiosInstance) =>
    async ({ id }: { id: string }) =>
      (await client.get<Planet>(`/planets/${id}`)).data,
} as const;
