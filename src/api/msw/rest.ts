import { rest as MWSRest } from 'msw';

import { BASE_URL } from '../axios';

const createRestHandler = <MethodType extends keyof typeof MWSRest>(method: MethodType): typeof MWSRest[MethodType] =>
  ((...params: Parameters<typeof MWSRest[MethodType]>) => {
    const [path, resolver] = params;

    const url = new RegExp('^(?:[a-z+]+:)?//', 'i').test(path.toString()) ? path : `${BASE_URL}${path}`;

    return MWSRest[method](url, resolver);
  }) as typeof MWSRest[MethodType];

export const rest = {
  head: createRestHandler('head'),
  get: createRestHandler('get'),
  post: createRestHandler('post'),
  put: createRestHandler('put'),
  delete: createRestHandler('delete'),
  patch: createRestHandler('patch'),
  options: createRestHandler('options'),
};
