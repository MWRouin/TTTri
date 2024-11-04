import { CategorieActionTypes } from './constants';
import { Categorie } from './type';
export type CategorieActionType = {
    type:
        | CategorieActionTypes.API_RESPONSE_SUCCESS
        | CategorieActionTypes.API_RESPONSE_ERROR
        | CategorieActionTypes.Get_ALL_CATEGORIE
        | CategorieActionTypes.Get_BY_ID_CATEGORIE
        | CategorieActionTypes.UPDATE_CATEGORIE
        | CategorieActionTypes.DELETE_CATEGORIE
        | CategorieActionTypes.CREATE_CATEGORIE;
    payload: {} | string;
};

type CategorieData = {
    payload: Categorie;
    type: string;
};

export const categorieApiResponseSuccess = (actionType: string, data: CategorieData | {}): CategorieActionType => ({
    type: CategorieActionTypes.API_RESPONSE_SUCCESS,
    payload: { actionType, data },
});
export const categorieApiResponseError = (actionType: string, error: string): CategorieActionType => ({
    type: CategorieActionTypes.API_RESPONSE_ERROR,
    payload: { actionType, error },
});

export const AddCategorie = (categorie: Categorie): CategorieActionType => ({
    type: CategorieActionTypes.CREATE_CATEGORIE,
    payload: categorie,
});

export const DeleteCategorie = (id: number): CategorieActionType => ({
    type: CategorieActionTypes.DELETE_CATEGORIE,
    payload: { id },
});

export const GetAllCategories = (): CategorieActionType => ({
    type: CategorieActionTypes.Get_ALL_CATEGORIE,
    payload: {},
});

export const GetCategorieById = (): CategorieActionType => ({
    type: CategorieActionTypes.Get_BY_ID_CATEGORIE,
    payload: {},
});

export const UpdateCategorie = (categorie: Categorie): CategorieActionType => ({
    type: CategorieActionTypes.UPDATE_CATEGORIE,
    payload: categorie,
});
