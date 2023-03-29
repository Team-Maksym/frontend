import { publicAxiosInstance } from '../api';

export const getAllTalents = async (page, size) => {
  let data = [];

  await publicAxiosInstance
    .get('/talents', {
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

