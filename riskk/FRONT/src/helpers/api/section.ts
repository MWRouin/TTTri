import { APICore } from './apiCore';

const api = new APICore();
const BASE_URL = '/api/Sections';

const GetAllSections = async () => {
    const response = await api.getData(BASE_URL);
    return response;
};

const GetSectionById = async (SectionId: any) => {
    const response = await api.getById(BASE_URL, SectionId);
    return response;
};

const AddSection = async (data: { Section: any }) => {
    const response = await api.create(BASE_URL, data);
    return response;
};

const UpdateSection = async (data: { Section: any }) => {
    const response = await api.putSimple(BASE_URL, data);
    return response;
};

const DeleteSection = async (SectionId: number) => {
    const response = await api.delete(`${BASE_URL}/${SectionId}`);
    return response;
};

export { GetAllSections, GetSectionById, AddSection, UpdateSection, DeleteSection };
