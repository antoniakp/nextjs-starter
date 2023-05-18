import { rest } from '../../msw/rest';

import planetsJSON from './planet.mocks.json';
import { AddPlanetResponse, GetPlanetsResponse, Planet } from './planet.types';

const planets = planetsJSON as Planet[];

export const planetMocks = [
  rest.get('/planets', (req, res, ctx) => {
    const pageParam = req.url.searchParams.get('page');
    const page = pageParam === null ? 1 : +pageParam;
    const PLANETS_PER_PAGE = 3;
    const lastPage = Math.ceil(planets.length / PLANETS_PER_PAGE);

    if (page > 0 || page <= lastPage) {
      const end = page * PLANETS_PER_PAGE;
      const start = end - PLANETS_PER_PAGE;

      return res(
        ctx.delay(750),
        ctx.json<GetPlanetsResponse>({
          next: page === lastPage ? null : (page + 1).toString(),
          previous: page === 1 ? null : (page - 1).toString(),
          count: planets.length,
          results: planets.slice(start, end),
        }),
      );
    }
  }),

  rest.get('/planets/:planetId', (req, res, ctx) => {
    const { planetId } = req.params;
    const planetIdx = +planetId - 1;

    return +planetId > planets.length ? res(ctx.status(404)) : res(ctx.json(planets[planetIdx]));
  }),

  rest.post('/planets/add', async (req, res, ctx) => {
    const body = {
      id: Math.floor(Math.random() * 100_000),
      ...(await req.json()),
    };
    return res(ctx.delay(750), ctx.json<AddPlanetResponse>(body));
  }),
];
