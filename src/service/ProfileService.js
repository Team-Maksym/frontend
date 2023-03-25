import axios from 'axios';

export const GetAllUsers = async () => {
  let users = [];

  await axios
    .get('https://dummyjson.com/users', {
      params: {
        skip: 30,
        limit: 10,
      },
    })
    .then((response) => {
      users = response.data.users;
	 });
	
  return users;
};
