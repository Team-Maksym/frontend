import { protectedAxiosInstance } from '../api';

export const getOneSponsor = async (sponsorId) => {
  return await protectedAxiosInstance.get(`v1/sponsors/${sponsorId}`).then((response) => response.data);
};

export const patchSponsor = async (sponsorId, sponsor) => {
  return await protectedAxiosInstance.patch(`v1/sponsors/${sponsorId}`, sponsor).then((response) => response.data);
};

export const deleteSponsor = async (sponsorId) => {
  return await protectedAxiosInstance.post(`v1/sponsors/${sponsorId}/delete`).then((response) => {
    return response;
  });
};
