import { protectedAxiosInstance, publicAxiosInstance } from '../api';

export const getKudosProtected = async (proofId) => {
  return await protectedAxiosInstance.get(`v1/proofs/${proofId}/kudos`).then((response) => response.data);
};

export const getKudosPublic = async (proofId) => {
  return await publicAxiosInstance.get(`v1/proofs/${proofId}/kudos`).then((response) => response.data);
};

export const postKudos = async (proofId, kudos) => {
  return await protectedAxiosInstance
    .post(`v1/proofs/${proofId}/kudos?kudos=${kudos}`)
    .then((response) => response.data);
};
