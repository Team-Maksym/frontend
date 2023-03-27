import axios from 'axios';

export const getAllTalents = async (page , size ) => {
  let data = [];

  await axios
    .get('http://18.194.159.42:8082/talents', {
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
