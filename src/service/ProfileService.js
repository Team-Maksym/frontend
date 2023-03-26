import axios from 'axios';

export const GetAllUsers = async (page = 0, limit = 10) => {
  let users = [];

  await axios
    .get('https://dummyjson.com/users', {
      params: {
        skip: page*limit,
        limit: limit,
      },
    })
    .then((response) => {
      users = response.data.users;
	 });
	
  return users;
};
