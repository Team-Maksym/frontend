import { publicAxiosInstance } from '../api';
import jwt_decode from 'jwt-decode';

export const getCurrentPersonId = () => {
  const token = localStorage.getItem('token');
  return token && jwt_decode(token).sub;
};

export const getCurrentPersonRole = () => {
  const token = localStorage.getItem('token');
  return token && jwt_decode(token).scope;
};

export const getCurrentPersonStatus = () => {
  const token = localStorage.getItem('token');
  return token && jwt_decode(token).status;
};
export const signUp = async ({ type, ...person }) => {
  const response = await publicAxiosInstance.post(type, person);
  if (response.data.token) {
    localStorage.setItem('token', response.data.token);
  }
};

export const signIn = async ({ type, ...person }) => {
  const sponsorLoginPromise = publicAxiosInstance.post(
    'v1/sponsors/login',
    {},
    {
      auth: {
        username: person.email,
        password: person.password,
      },
    },
  );

  const talentLoginPromise = publicAxiosInstance.post(
    'v1/talents/login',
    {},
    {
      auth: {
        username: person.email,
        password: person.password,
      },
    },
  );

    const [sponsorResponse, talentResponse] = await Promise.allSettled([sponsorLoginPromise, talentLoginPromise]);
    const successfulResponse = sponsorResponse.status === 'fulfilled' ? sponsorResponse : talentResponse;
    if (sponsorResponse.status === 'rejected' && talentResponse.status === 'rejected') {
      throw sponsorResponse.reason.response;
    }
    if (successfulResponse.value.data.token) {
      localStorage.setItem('token', successfulResponse.value.data.token);
    }
};