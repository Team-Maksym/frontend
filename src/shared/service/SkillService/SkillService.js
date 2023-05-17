import { publicAxiosInstance } from '../api';

export const getAllSkills = async (skip, limit, filter) => {
  let data = [];

  await publicAxiosInstance
    .get('/v1/skills', {
      params: {
        skip: skip,
        limit: limit,
        filter: filter,
      },
    })
    .then((response) => {
      data = response.data;
    });

  return data;
};
