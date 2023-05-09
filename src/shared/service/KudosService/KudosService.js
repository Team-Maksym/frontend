import { protectedAxiosInstance, publicAxiosInstance} from '../api';

export const getKudosProtected = async (proofId) => {
  return await protectedAxiosInstance.get(`proofs/${proofId}/kudos`).then((response) => response.data);
};

export const getKudosPublic = async (proofId) => {
  return await publicAxiosInstance.get(`proofs/${proofId}/kudos`).then((response) => response.data);
};

export const postKudos = async (proofId, kudos) => {
  return await protectedAxiosInstance.post(`proofs/${proofId}/kudos?kudos=${kudos}`).then((response) => response.data);
};

