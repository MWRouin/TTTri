import { APICore } from './apiCore';

const api = new APICore();
const BASE_URL = '/api/Reclaims';

const AddReclaim = async (claim: any) => {
  const response = await api.create(BASE_URL, claim);
  return response;
};

const UpdateReclaim = async (data: { claim: any }) => {
  const response = await api.putSimple(BASE_URL, data);
  return response;
};

const DeleteReclaim = async (ReclaimId: number) => {
  const response = await api.delete(`${BASE_URL}/${ReclaimId}`);
  return response;
};

const GetReclaimById = async (ReclaimId: any) => {
  const response = await api.getById(BASE_URL, ReclaimId);
  return response;
};

const GetAllReclaims = async () => {
  const response = await api.getData(BASE_URL);
  return response;
};

export { AddReclaim, UpdateReclaim, GetReclaimById, GetAllReclaims, DeleteReclaim };
