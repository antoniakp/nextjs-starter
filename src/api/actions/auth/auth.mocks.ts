import { rest } from '../../msw/rest';

import { GetMeResponse, LoginMutationArguments, LoginMutationResponse } from './auth.types';

export const MOCKED_TOKEN = 'mocked_token';

const user = {
  firstName: 'James',
  lastName: 'Kowalsky',
  email: 'james.kowalsky@tsh.io',
  city: 'Gliwice',
  picture: 'https://randomuser.me/api/portraits/men/3.jpg',
};

export const authMocks = [
  rest.get('/me', (req, res, ctx) => {
    const isTokenValid = req.headers.get('Authorization') === `Bearer ${MOCKED_TOKEN}`;

    return isTokenValid ? res(ctx.delay(500), ctx.json<GetMeResponse>(user)) : undefined;
  }),

  rest.post('/login', async (req, res, ctx) => {
    const { username, password } = (await req.json()) as LoginMutationArguments;
    if (username === 'john' && password === 'doe123') {
      return res(ctx.json<LoginMutationResponse>({ accessToken: MOCKED_TOKEN, user }));
    } else {
      return res(ctx.status(401));
    }
  }),
];
