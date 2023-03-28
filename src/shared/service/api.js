import axios from 'axios';

const API_URL = 'http://18.194.159.42:8082';

export const publicAxiosInstance = axios.create({
  baseURL: API_URL,
});

export const protectedAxiosInstance = axios.create({
  baseURL: API_URL,
});

protectedAxiosInstance.interceptors.request.use((config) => {
  config.headers.Authorization = `Basic ${localStorage.getItem('token')}`;
  return config;
});

protectedAxiosInstance.interceptors.response.use(
  (config) => {
    return config;
  },
  (error) => {
    if (error.response.status === 401) {
      console.log('Not authorized');
      localStorage.removeItem('token');
    }
  },
);

