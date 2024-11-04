import { APICore } from './apiCore';

const api = new APICore();
const BASE_URL = '/api/invoice';




const GetInvoices = async () => {
    const response = await api.getData(BASE_URL);
    return response;
};

const GetInvoiceById = async (CourseId: any) => {
    const response = await api.getById(BASE_URL, CourseId);
    return response;
};

const AddInvoice = async (data: {Course: any }) => {
    const response = await api.create(BASE_URL, data);
    return response;
};

const UpdateInvoice= async (data: {  Course: any }) => {
    const response = await api.putSimple(BASE_URL, data);
    return response;
};

const DeleteInvoice = async (CourseId: number) => {
    const response = await api.delete(`${BASE_URL}/${CourseId}`);
    return response;
};



export { GetInvoices,  GetInvoiceById, AddInvoice, UpdateInvoice, DeleteInvoice};
