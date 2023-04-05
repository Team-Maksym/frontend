import { protectedAxiosInstance } from '../api';
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

export const getOneTalent = async (talentId) => {
  return await protectedAxiosInstance.get(`talents/${talentId}`).then((response) => response.data);
};

export const deleteTalent = async (talentId) => {
  return await protectedAxiosInstance.delete(`talents/${talentId}`).then((response) => response.data);
};

