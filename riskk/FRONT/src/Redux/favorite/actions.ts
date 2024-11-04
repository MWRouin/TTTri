import { FavoriteActionTypes } from './constants';
import { Favorite } from './type';

export type FavoriteActionType = {
    type:
        | FavoriteActionTypes.API_RESPONSE_SUCCESS
        | FavoriteActionTypes.API_RESPONSE_ERROR
        | FavoriteActionTypes.Get_ALL_FAVORITES
        | FavoriteActionTypes.DELETE_FAVORITE
        | FavoriteActionTypes.CREATE_FAVORITE;
    payload: {} | string;
};

type FavoriteData = {
    payload: Favorite;
    type: string;
};

export const favoriteApiResponseSuccess = (actionType: string, data: FavoriteData | {}): FavoriteActionType => ({
    type: FavoriteActionTypes.API_RESPONSE_SUCCESS,
    payload: { actionType, data },
});

export const favoriteApiResponseError = (actionType: string, error: string): FavoriteActionType => ({
    type: FavoriteActionTypes.API_RESPONSE_ERROR,
    payload: { actionType, error },
});

export const AddFavorite = (favorite: Favorite): FavoriteActionType => ({
    type: FavoriteActionTypes.CREATE_FAVORITE,
    payload: favorite,
});

export const DeleteFavorite = (favoriteId: number): FavoriteActionType => ({
    type: FavoriteActionTypes.DELETE_FAVORITE,
    payload: { favoriteId },
});

export const GetAllFavorites = (): FavoriteActionType => ({
    type: FavoriteActionTypes.Get_ALL_FAVORITES,
    payload: {},
});
