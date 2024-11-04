import { APICore } from './apiCore';

const api = new APICore();
const BASE_URL = '/api/levels';


const GetLevels = async () => {
    const response = await api.getData(BASE_URL);
    return response;
};

const GetLevel = async (LevelId: any) => {
    const response = await api.getById(BASE_URL, LevelId);
    return response;
};

const AddLevel = async (data:any ) => {
    const response = await api.create(BASE_URL, data);
    return response;
};

const UpdateLevel = async (data: {  Level: any }) => {
    const response = await api.putSimple(BASE_URL, data);
    return response;
};

const DeleteLevel = async (LevelId: number) => {
    const response = await api.delete(`${BASE_URL}/${LevelId}`);
    return response;
};



export { GetLevels,GetLevel, AddLevel, UpdateLevel, DeleteLevel};
