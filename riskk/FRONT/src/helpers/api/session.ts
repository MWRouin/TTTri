import { APICore } from './apiCore';

const api = new APICore();
const BASE_URL = '/api/Session';

const GetAllSessions = async () => {
    const response = await api.getData(BASE_URL);
    return response;
};

const GetSessionById = async (SessionId: any) => {
    const response = await api.getById(BASE_URL, SessionId);
    return response;
};

const AddSession = async (data: { Session: any }) => {
    const response = await api.create(BASE_URL, data);
    return response;
};

const UpdateSession = async (data: { Session: any }) => {
    const response = await api.putSimple(BASE_URL, data);
    return response;
};

const DeleteSession = async (SessionId: number) => {
    const response = await api.delete(`${BASE_URL}/${SessionId}`);
    return response;
};

const UploadSessionFile = async (url: any, FormData :any) => {
    const formData = new FormData();
    formData.append('file', url);
    const response = await api.upload(`${BASE_URL}/DownloadSession`, formData );
    return response;
};
export { GetAllSessions, GetSessionById, AddSession, UpdateSession, DeleteSession, UploadSessionFile };
