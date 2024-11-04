import { APICore } from './apiCore';

const api = new APICore();
const BASE_URL = '/api/PaymentMethode';


const GetPaymentMethodes = async () => {
    const PaymentMethode = await api.getData(BASE_URL);
    return PaymentMethode;
};

const GetPaymentMethodeById = async (PaymentMethodeId: any) => {
    const PaymentMethode = await api.getById(BASE_URL, PaymentMethodeId);
    return PaymentMethode;
};

const AddPaymentMethode = async (data: {PaymentMethode: any }) => {
    const PaymentMethode = await api.create(BASE_URL, data);
    return PaymentMethode;
};

const UpdatePaymentMethode = async (data: {  PaymentMethode: any }) => {
    const PaymentMethode = await api.putSimple(BASE_URL, data);
    return PaymentMethode;
};

const DeletePaymentMethode = async (PaymentMethodeId: number) => {
    const PaymentMethode = await api.delete(`${BASE_URL}/${PaymentMethodeId}`);
    return PaymentMethode;
};



export { GetPaymentMethodes ,GetPaymentMethodeById, AddPaymentMethode, UpdatePaymentMethode, DeletePaymentMethode};
