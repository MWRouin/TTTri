import { APICore } from './apiCore';

const api = new APICore();
const BASE_URL = '/api/responsedetails';


const GetResponseDetails = async () => {
    const response = await api.getData(BASE_URL);
    return response;
};

const GetResponseDetailsById = async (ResponseDetailsId: any) => {
    const response = await api.getById(BASE_URL, ResponseDetailsId);
    return response;
};

const AddResponseDetails = async (data: {ResponseDetails: any }) => {
    const response = await api.create(BASE_URL, data);
    return response;
};

const UpdateResponseDetails = async (data: {  ResponseDetails: any }) => {
    const response = await api.putSimple(BASE_URL, data);
    return response;
};

const DeleteResponseDetails = async (ResponseDetailsId: number) => {
    const response = await api.delete(`${BASE_URL}/${ResponseDetailsId}`);
    return response;
};



export { GetResponseDetails ,GetResponseDetailsById, AddResponseDetails, UpdateResponseDetails, DeleteResponseDetails};
