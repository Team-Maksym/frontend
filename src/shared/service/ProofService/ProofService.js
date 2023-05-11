import { protectedAxiosInstance, publicAxiosInstance } from '../api';

export const getAllProofs = async (page, size, sort) => {
  let data = [];

  await publicAxiosInstance
    .get('/v1/proofs', {
      params: {
        page: page,
        size: size,
        sort: sort,
      },
    })
    .then((response) => {
      data = response.data;
    });

  return data;
};

export const getProofById = async (id) => {
  return await protectedAxiosInstance.get(`v1/proofs/${id}`).then((response) => response.data);
};
