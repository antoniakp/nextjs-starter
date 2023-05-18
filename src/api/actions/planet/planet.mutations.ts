import { AxiosInstance } from 'axios';

import { AddPlanetResponse, Planet } from './planet.types';

export const planetMutations = {
  addPlanet: (client: AxiosInstance) => async (body: Planet) =>
    (await client.post<AddPlanetResponse>('/planets/add', body)).data,
};
