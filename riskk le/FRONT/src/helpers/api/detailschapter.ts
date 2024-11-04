import { APICore } from './apiCore';

const api = new APICore();
const BASE_URL = '/api/detailschapter';



const GetDetailsChapters = async () => {
    const response = await api.getData(BASE_URL);
    return response;
};

const GetDetailsChapterById = async (DetailsChapterId: any) => {
    const response = await api.getById(BASE_URL, DetailsChapterId);
    return response;
};

const AddDetailsChapter = async (data: {DetailsChapter: any }) => {
    const response = await api.create(BASE_URL, data);
    return response;
};

const UpdateDetailsChapter = async (data: {  DetailsChapter: any }) => {
    const response = await api.putSimple(BASE_URL, data);
    return response;
};

const DeleteDetailsChapter = async (DetailsChapterId: number) => {
    const response = await api.delete(`${BASE_URL}/${DetailsChapterId}`);
    return response;
};



export { GetDetailsChapters, GetDetailsChapterById, AddDetailsChapter, UpdateDetailsChapter, DeleteDetailsChapter};
