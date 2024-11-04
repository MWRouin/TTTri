import { APICore } from './apiCore';

const api = new APICore();
const BASE_URL = '/api/certificate';



const GetCertificates = async () => {
    const response = await api.getData(BASE_URL);
    return response;
};

const GetCertificateById = async (CertificateId: any) => {
    const response = await api.getById(BASE_URL, CertificateId);
    return response;
};

const AddCertificate = async (data: {Certificate: any }) => {
    const response = await api.create(BASE_URL, data);
    return response;
};

const UpdateCertificate = async (data: {  Certificate: any }) => {
    const response = await api.putSimple(BASE_URL, data);
    return response;
};

const DeleteCertificate = async (CertificateId: number) => {
    const response = await api.delete(`${BASE_URL}/${CertificateId}`);
    return response;
};



export { GetCertificates, GetCertificateById, AddCertificate, UpdateCertificate, DeleteCertificate};
