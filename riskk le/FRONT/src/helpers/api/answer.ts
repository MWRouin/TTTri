import { APICore } from './apiCore';

const api = new APICore();
const BASE_URL = '/api/Answer';



const GetAnswers = async () => {
    const response = await api.getData(BASE_URL);
    return response;
};

const GetAnswer = async (AnswerId: any) => {
    const response = await api.getById(BASE_URL, AnswerId);
    return response;
};

const AddAnswer = async (data: {Answer: any }) => {
    const response = await api.create(BASE_URL, data);
    return response;
};

const UpdateAnswer = async (data: {  Answer: any }) => {
    const response = await api.putSimple(BASE_URL, data);
    return response;
};

const DeleteAnswer = async (AnswerId: number) => {
    const response = await api.delete(`${BASE_URL}/${AnswerId}`);
    return response;
};



export { GetAnswers, GetAnswer, AddAnswer, UpdateAnswer, DeleteAnswer};
