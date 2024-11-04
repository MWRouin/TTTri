import { APICore } from './apiCore';

const api = new APICore();
const BASE_URL = '/api/response';


const GetResponses = async () => {
    const response = await api.getData(BASE_URL);
    return response;
};

const GetResponseById = async (ResponseId: any) => {
    const response = await api.getById(BASE_URL, ResponseId);
    return response;
};

const AddResponse = async (data: {Response: any }) => {
    const response = await api.create(BASE_URL, data);
    return response;
};

const UpdateResponse = async (data: {  Response: any }) => {
    const response = await api.putSimple(BASE_URL, data);
    return response;
};

const DeleteResponse = async (ResponseId: number) => {
    const response = await api.delete(`${BASE_URL}/${ResponseId}`);
    return response;
};



export { GetResponses ,GetResponseById, AddResponse, UpdateResponse, DeleteResponse};
