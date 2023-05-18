import axios from 'axios';

import {
  requestSuccessInterceptor,
  responseFailureInterceptor,
  responseSuccessInterceptor,
} from '../../context/apiClient/apiClientContextController/interceptors';

export const BASE_URL = process.env.NEXT_PUBLIC_API_URL as string;

const axiosClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosClient.interceptors.request.use(requestSuccessInterceptor);
axiosClient.interceptors.response.use(responseSuccessInterceptor, responseFailureInterceptor);

export default axiosClient;
