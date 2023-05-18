import { AxiosInstance } from 'axios';

import { LoginMutationArguments, LoginMutationResponse } from './auth.types';

export const authMutations = {
  login: (client: AxiosInstance) => async (body: LoginMutationArguments) =>
    (await client.post<LoginMutationResponse>('/login', body)).data,
};
