import { protectedAxiosInstance, publicAxiosInstance } from '../api';

export const getKudos = async (proofId) => {
  return await publicAxiosInstance.get(`proofs/${proofId}/kudos`).then((response) => response.data);
};

export const postKudos = async (proofId, kudos) => {
  return await protectedAxiosInstance
    .post(`proofs/${proofId}/kudos${kudos ? `?kudos=${kudos}` : ''}`)
    .then((response) => response.data);
};

