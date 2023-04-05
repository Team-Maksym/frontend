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

export const patchTalentProfile = async (talent) => {
  // const data = {
  //   full_name: 'Tyler Durden1',
  //   birthday: null,
  //   avatar: null,
  //   education: null,
  //   experience: null,
  //   positions: [],
  // };
  console.log('patch' ,talent)
  // return await protectedAxiosInstance.patch(`talents/${talent.id}`, data).then((response) => response.data);
};
