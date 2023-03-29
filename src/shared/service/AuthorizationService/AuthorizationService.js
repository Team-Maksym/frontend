import { publicAxiosInstance } from "../api";

export const signUp = async (talent) => {
  return await publicAxiosInstance.post('talents', talent).then((response) => {
    return response.data;
  });
};

export const signIn = async (talent) => {
  return await publicAxiosInstance
    .post('talents/login', talent, {
      auth: {
        username: talent.email,
        password: talent.password,
      },
    })
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
      }
      return response.data;
    });
};

