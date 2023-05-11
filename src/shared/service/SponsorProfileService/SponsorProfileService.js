import { protectedAxiosInstance } from '../api';
import { publicAxiosInstance } from '../api';

export const getOneSponsor = async (sponsorId) => {
  return await protectedAxiosInstance.get(`v1/sponsors/${sponsorId}`).then((response) => response.data);
};

export const patchSponsor = async (sponsorId, sponsor) => {
  return await protectedAxiosInstance.patch(`v1/sponsors/${sponsorId}`, sponsor).then((response) => response.data);
};

export const deleteSponsor = async (sponsorId) => {
  return await protectedAxiosInstance.delete(`v1/sponsors/${sponsorId}`).then((response) => {
    return response;
  });
};

export const recoverySendEmail = async (sponsorId) => {
  return await protectedAxiosInstance.post(`v1/sponsors/${sponsorId}/send-recovery-account-email`).then((response) => {
    return response;
  });
};

export const recoveryAccount = async (uuid) => {
  return await publicAxiosInstance.post(`v1/sponsors/recovery-account?uuid=${uuid}`).then((response) => {
    return response;
  });
};

export const getKudosses = async (sponsorId) => {
  return await protectedAxiosInstance.get(`sponsors/${sponsorId}/kudos`).then((response) => response.data);
};
