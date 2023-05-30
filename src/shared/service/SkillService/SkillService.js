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
    .post(`v2/talents/${talentId}/proofs/${proofId}/skills`, skills)
    .then((response) => response.data);
};

export const deleteSkills = async (talentId, proofId, skillsId) => {
  return await protectedAxiosInstance
    .delete(`v1/talents/${talentId}/proofs/${proofId}/skills`, { data: { skillsId: skillsId } })
    .then((response) => response.data);
};
