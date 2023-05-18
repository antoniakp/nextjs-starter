import { AxiosInstance } from 'axios';

import { GetMeArguments, GetMeResponse } from './auth.types';

export const authQueries = {
  getMe: (client: AxiosInstance) => async (args: GetMeArguments) =>
    (
      await client.get<GetMeResponse>('/me', {
        headers: { Authorization: `Bearer ${args.token}` },
      })
    ).data,
};
