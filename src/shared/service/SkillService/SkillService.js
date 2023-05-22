import { publicAxiosInstance, protectedAxiosInstance } from '../api';


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

export const getOneProofSkill = async (proofId) => {
  return await protectedAxiosInstance.get(`v1/proofs/${proofId}/skills`).then((response) => response.data);
};

export const postOneProofSkill = async (talentId, proofId, skills) => {
  return await protectedAxiosInstance
    .post(`v1/talents/${talentId}/proofs/${proofId}/skills`, skills)
    .then((response) => response.data);
};

export const deleteSkill = async (talentId, proofId, skillId) => {
  return await protectedAxiosInstance
    .delete(`v1/talents/${talentId}/proofs/${proofId}/skills/${skillId}`)
    .then((response) => response.data);
};