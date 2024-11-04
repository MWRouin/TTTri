import { APICore } from './apiCore';

const api = new APICore();
const BASE_URL = '/api/Users';

const AddUser = async (user: any) => {
  const response = await api.create(BASE_URL, user);
  return response;
};

const UpdateUser = async (data: { user: any }) => {
  const response = await api.putSimple(BASE_URL, data);
  return response;
};

const DeleteUser = async (UserId: number) => {
  const response = await api.delete(`${BASE_URL}/${UserId}`);
  return response;
};

const GetUserById = async (UserId: any) => {
  const response = await api.getById(BASE_URL, UserId);
  return response;
};

const GetAllUsers = async () => {
  const response = await api.getData(BASE_URL);
  return response;
};

export { AddUser, UpdateUser, GetUserById, GetAllUsers, DeleteUser };
