import { planetMocks } from '../actions/planet/planet.mocks';
import { authMocks } from '../actions/auth/auth.mocks';

export const mockHandlers = [...planetMocks, ...authMocks];
