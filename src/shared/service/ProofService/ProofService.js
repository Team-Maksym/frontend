import { protectedAxiosInstance } from '../api';
import { publicAxiosInstance } from '../api';

export const getAllProofs = async (page, size) => {
  let data = [];

  await publicAxiosInstance
    .get('/proofs', {
      params: {
        page: page,
        size: size,
      },
    })
    .then((response) => {
      data = response.data;
    });

  return data;
};