import { publicAxiosInstance } from '../api';
import jwt_decode from 'jwt-decode';

export const getCurrentTalentId = () => {
  const token = localStorage.getItem('token');
  return token && jwt_decode(token).sub;
};

export const signUp = async (talent) => {
  return await publicAxiosInstance.post('talents', talent).then((response) => {
    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
    }
    return response.data;
  });
};

export const signIn = async (talent) => {
  return await publicAxiosInstance
    .post(
      'talents/login',
      {},
      {
        auth: {
          username: talent.email,
          password: talent.password,
        },
      },
    )
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
      }
      return response.data;
    });
};

