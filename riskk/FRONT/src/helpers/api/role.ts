import { APICore } from './apiCore';

const api = new APICore();
const BASE_URL = '/api/roles';

const GetRoles = async () => {
    const response = await api.getData(BASE_URL);
    return response;
};

const GetRole = async (RoleId: any) => {
    const response = await api.getById(BASE_URL, RoleId);
    return response;
};

const AddRole = async (data: any) => {
    const response = await api.create(BASE_URL, data);
    return response;
};

const UpdateRole = async (data: { Role: any }) => {
    const response = await api.putSimple(BASE_URL, data);
    return response;
};

const DeleteRole = async (RoleId: number) => {
    const response = await api.delete(`${BASE_URL}/${RoleId}`);
    return response;
};

export { GetRoles, GetRole, AddRole, UpdateRole, DeleteRole };
