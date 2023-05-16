import { protectedAxiosInstance } from '../api';
import { publicAxiosInstance } from '../api';

export const getAllTalents = async (page, size) => {
  let data = [];

  await publicAxiosInstance
    .get('v1/talents', {
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
  return await protectedAxiosInstance.get(`v1/talents/${talentId}`).then((response) => response.data);
};

export const getOneTalentProofs = async (talentId, proofStatus) => {
  return await protectedAxiosInstance
    .get(`v1/talents/${talentId}/proofs?page=0&size=2147483647&sort=true&status=${proofStatus}`)
    .then((response) => response.data);
};

export const deleteTalent = async (talentId) => {
  return await protectedAxiosInstance.delete(`v1/talents/${talentId}`).then((response) => response.data);
};

export const patchTalentProfile = async (talentNewProfile, talentId) => {
  return await protectedAxiosInstance
    .patch(`v1/talents/${talentId}`, talentNewProfile)
    .then((response) => response.data);
};

export const addTalentProof = async (talentId, newProof) => {
  return await protectedAxiosInstance.post(`v1/talents/${talentId}/proofs`, newProof).then((response) => response.data);
};

export const editTalentProof = async (talentId, proofId, newProof) => {
  return await protectedAxiosInstance
    .patch(`v1/talents/${talentId}/proofs/${proofId}`, newProof)
    .then((response) => response.data);
};

export const deleteProof = async (talentId, proofId) => {
  return await protectedAxiosInstance
    .delete(`v1/talents/${talentId}/proofs/${proofId}`)
    .then((response) => response.data);
};
