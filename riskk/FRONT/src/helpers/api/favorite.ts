import { APICore } from './apiCore';

const api = new APICore();
const BASE_URL = '/api/favorite';

const GetFavorites = async () => {
    const response = await api.getData(BASE_URL);
    return response;
};

const AddFavorite = async (data: { Favorite: any }) => {
    const response = await api.create(BASE_URL, data);
    return response;
};

const DeleteFavorite = async (FavoriteId: any) => {
    const response = await api.deleteById(BASE_URL, FavoriteId);
    return response;
};

export { GetFavorites, AddFavorite, DeleteFavorite };
