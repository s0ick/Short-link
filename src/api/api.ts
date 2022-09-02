import axios from 'axios';

import {BASE_URL, SL_ACCESS_TOKEN} from '../utils/constants';

const axiosRequest = axios.create({
  baseURL: BASE_URL
});

axiosRequest.interceptors.request.use((config) => {
  const token = localStorage.getItem(SL_ACCESS_TOKEN);

  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default axiosRequest;
