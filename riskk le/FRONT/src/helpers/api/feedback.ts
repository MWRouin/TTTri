import { APICore } from './apiCore';

const api = new APICore();
const BASE_URL = '/api/feedback';



const GetFeedbacks = async () => {
    const response = await api.getData(BASE_URL);
    return response;
};

const GetFeedbackById = async (FeedbackId: any) => {
    const response = await api.getById(BASE_URL, FeedbackId);
    return response;
};

const AddFeedback = async (data: {Feedback: any }) => {
    const response = await api.create(BASE_URL, data);
    return response;
};

const UpdateFeedback = async (data: {  Feedback: any }) => {
    const response = await api.putSimple(BASE_URL, data);
    return response;
};

const DeleteFeedback = async (FeedbackId: any) => {
    const response = await api.deleteById(BASE_URL,FeedbackId);
    return response;
};



export { GetFeedbacks, GetFeedbackById, AddFeedback, UpdateFeedback, DeleteFeedback};
