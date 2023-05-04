import { protectedAxiosInstance, publicAxiosInstance } from '../api';

export const getKudos = async (proofId) => {
  return await publicAxiosInstance.get(`proofs/${proofId}/kudos`).then((response) => response.data);
};

export const postKudos = async (proofId) => {
  return await protectedAxiosInstance.post(`proofs/${proofId}/kudos`).then((response) => response.data);
};

