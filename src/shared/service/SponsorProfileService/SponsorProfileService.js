import { protectedAxiosInstance } from '../api';

export const getOneSponsor = async (sponsorId) => {
  return await protectedAxiosInstance.get(`sponsors/${sponsorId}`).then((response) => response.data);
};