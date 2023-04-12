import { publicAxiosInstance } from '../api';

export const getAllProofs = async (page, size, sort) => {
  let data = [];

  await publicAxiosInstance
    .get('/proofs', {
      params: {
        page: page,
        size: size,
        sort: sort
      },
    })
    .then((response) => {
      data = response.data;
    });

  return data;
};