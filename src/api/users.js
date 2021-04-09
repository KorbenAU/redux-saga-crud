import axios from 'axios';

export const getUsers = async () => {
  const result = await axios.get('/users', { params: { limit: 100 } });
  return result;
};

export const createUser = async (firstName, lastName) => {
  console.log('api/create_user');
  const res = await axios.post('/users', { firstName, lastName });
  console.log('response:');
  console.log(res);
};

export const deleteUser = async (id) => {
  console.log('api/delete_user');
  const res = await axios.delete(`/users/${id}aaa`);
  console.log('response:');
  console.log(res);
};
