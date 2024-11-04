import { APICore } from './apiCore';

const api = new APICore();
const BASE_URL = '/api/Test';

const GetAllTests = async () => {
    const response = await api.getData(BASE_URL);
    return response;
};

const GetTestById = async (TestId: any) => {
    const response = await api.getById(BASE_URL, TestId);
    return response;
};

const AddTest = async (data: {Test: any }) => {
    const response = await api.create(BASE_URL, data);
    return response;
};

const UpdateTest = async (data: {  Test: any }) => {
    const response = await api.putSimple(BASE_URL, data);
    return response;
};

const DeleteTest = async (TestId: number) => {
    const response = await api.delete(`${BASE_URL}/${TestId}`);
    return response;
};



export { GetAllTests,  GetTestById, AddTest, UpdateTest, DeleteTest};
