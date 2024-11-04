import { APICore } from './apiCore';

const api = new APICore();
const BASE_URL = '/api/inscription';



const GetInscriptions = async () => {
    const response = await api.getData(BASE_URL);
    return response;
};

const GetInscriptionById = async (InscriptionId: any) => {
    const response = await api.getById(BASE_URL, InscriptionId);
    return response;
};

const AddInscription = async (data: {Inscription: any }) => {
    const response = await api.create(BASE_URL, data);
    return response;
};

const UpdateInscription = async (data: {  Inscription: any }) => {
    const response = await api.putSimple(BASE_URL, data);
    return response;
};

const DeleteInscription = async (InscriptionId: number) => {
    const response = await api.delete(`${BASE_URL}/${InscriptionId}`);
    return response;
};


export { GetInscriptions, GetInscriptionById, AddInscription, UpdateInscription, DeleteInscription};
