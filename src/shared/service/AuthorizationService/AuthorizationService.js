import { publicAxiosInstance } from '../api';
import jwt_decode from 'jwt-decode';

export const getCurrentTalentId = () => {
  const token = localStorage.getItem('token');
  return token && jwt_decode(token).sub;
};

export const signUp = async ({ type, ...person }) => {
  const response = await publicAxiosInstance.post(type, person);
  if (response.data.token) {
    localStorage.setItem('token', response.data.token);
  }
  return {data: response.data, type: type};
};

export const signIn = async ({ type, ...person }) => {
  return await publicAxiosInstance
    .post(
      `${type}/login`,
      {},
      {
        auth: {
          username: person.email,
          password: person.password,
        },
      },
    )
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
      }
      return {data: response.data, type: type};
    });
};
