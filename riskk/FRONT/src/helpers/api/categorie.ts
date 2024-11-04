import { APICore } from './apiCore';

const api = new APICore();
const BASE_URL = '/api/Categorie';



const GetCategories = async () => {
    const response = await api.getData(BASE_URL);
    return response;
};

const GetCategorie = async (CategorieId: any) => {
    const response = await api.getById(BASE_URL, CategorieId);
    return response;
};

const AddCategorie = async (data:  any ) => {
    const response = await api.create(BASE_URL, data);
    return response;
};

const UpdateCategorie = async (data: {  Categorie: any }) => {
    const response = await api.putSimple(BASE_URL, data);
    return response;
};

const DeleteCategorie = async (CategorieId: number) => {
    const response = await api.delete(`${BASE_URL}/${CategorieId}`);
    return response;
};



export { GetCategories, GetCategorie, AddCategorie, UpdateCategorie, DeleteCategorie};
