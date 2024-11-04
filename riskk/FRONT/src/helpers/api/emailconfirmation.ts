import { APICore } from './apiCore';

const api = new APICore();
const BASE_URL = '/api/Confirmation';




const GetConfirmations = async () => {
    const response = await api.getData(BASE_URL);
    return response;
};

const GetConfirmationById = async (ConfirmationId: any) => {
    const response = await api.getById(BASE_URL, ConfirmationId);
    return response;
};

const AddConfirmation = async (data: {Confirmation: any }) => {
    const response = await api.create(BASE_URL, data);
    return response;
};

const UpdateConfirmation = async (data: {  Confirmation: any }) => {
    const response = await api.putSimple(BASE_URL, data);
    return response;
};

const DeleteConfirmation = async (ConfirmationId: number) => {
    const response = await api.delete(`${BASE_URL}/${ConfirmationId}`);
    return response;
};



export { GetConfirmations,  GetConfirmationById, AddConfirmation, UpdateConfirmation, DeleteConfirmation};
