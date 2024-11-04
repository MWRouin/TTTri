import { APICore } from './apiCore';

const api = new APICore();
const BASE_URL = '/api/question';


const GetQuestions = async () => {
    const response = await api.getData(BASE_URL);
    return response;
};

const GetQuestionById = async (QuestionId: any) => {
    const response = await api.getById(BASE_URL, QuestionId);
    return response;
};

const AddQuestion = async (data: {Question: any }) => {
    const response = await api.create(BASE_URL, data);
    return response;
};

const UpdateQuestion = async (data: {  Question: any }) => {
    const response = await api.putSimple(BASE_URL, data);
    return response;
};

const DeleteQuestion = async (QuestionId: number) => {
    const response = await api.delete(`${BASE_URL}/${QuestionId}`);
    return response;
};



export { GetQuestions ,GetQuestionById, AddQuestion, UpdateQuestion, DeleteQuestion};
