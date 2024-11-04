import { APICore } from './apiCore';

const api = new APICore();
const BASE_URL = '/api/payment';



const GetPayments = async () => {
    const response = await api.getData(BASE_URL);
    return response;
};

const GetPaymentById = async (PaymentId: any) => {
    const response = await api.getById(BASE_URL, PaymentId);
    return response;
};

const AddPayment = async (data: {Payment: any }) => {
    const response = await api.create(BASE_URL, data);
    return response;
};

const UpdatePayment = async (data: {  Payment: any }) => {
    const response = await api.putSimple(BASE_URL, data);
    return response;
};

const DeletePayment = async (PaymentId: number) => {
    const response = await api.delete(`${BASE_URL}/${PaymentId}`);
    return response;
};



export { GetPayments, GetPaymentById, AddPayment, UpdatePayment, DeletePayment};
