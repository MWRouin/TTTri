import { all, fork, put, takeEvery, call } from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/core';
import { APICore, setAuthorization } from '../../helpers/api/apiCore';
import {
    AddCategorie as AddCategorieApi,
    UpdateCategorie as UpdateCategorieApi,
    GetCategorie as GetCategorieByIdApi,
    GetCategories as GetAllCategoriesApi,
    DeleteCategorie as DeleteCategorieApi,
} from '../../helpers/';

import { categorieApiResponseError, categorieApiResponseSuccess } from './actions';
import { CategorieActionTypes } from './constants';
import { Categorie } from './type';

type CategorieData = {
    payload: Categorie;
    type: string;
};

const api = new APICore();

function* AddCategorie({ payload }: CategorieData): SagaIterator {
    console.log('payload saga AddCategorie');
    console.log(payload);
    try {
        const response = yield call(AddCategorieApi, payload);
        const data = response.data;
        console.log(response);

        if (data === true) {
            yield put(categorieApiResponseSuccess(CategorieActionTypes.CREATE_CATEGORIE, data));
            yield call(GetAllCategories);
        }
    } catch (error: any) {
        yield put(categorieApiResponseError(CategorieActionTypes.CREATE_CATEGORIE, error));
    }
}

function* UpdateCategorie({ payload }: any): SagaIterator {
    try {
        const response = yield call(UpdateCategorieApi, payload);
        const user = response.data;
        yield put(categorieApiResponseSuccess(CategorieActionTypes.UPDATE_CATEGORIE, user));
        yield call(GetAllCategories);
    } catch (error: any) {
        yield put(categorieApiResponseError(CategorieActionTypes.UPDATE_CATEGORIE, error));
    }
}

function* GetCategorieById({ payload: { categorieId } }: CategorieData): SagaIterator {
    try {
        const response = yield call(GetCategorieByIdApi, { categorieId });
        const user = response.data;
        yield put(categorieApiResponseSuccess(CategorieActionTypes.Get_BY_ID_CATEGORIE, user));
    } catch (error: any) {
        yield put(categorieApiResponseError(CategorieActionTypes.Get_BY_ID_CATEGORIE, error));
    }
}

function* GetAllCategories(): SagaIterator {
    try {
        console.log('payload saga AddCategorie');
        const response = yield call(GetAllCategoriesApi);
        const users = response.data;
        yield put(categorieApiResponseSuccess(CategorieActionTypes.Get_ALL_CATEGORIE, users));
    } catch (error: any) {
        yield put(categorieApiResponseError(CategorieActionTypes.Get_ALL_CATEGORIE, error));
    }
}

function* DeleteCategorie({ payload }: any): SagaIterator {
    try {
        const response = yield call(DeleteCategorieApi, payload.id);
        yield put(categorieApiResponseSuccess(CategorieActionTypes.DELETE_CATEGORIE, response.data));
        yield call(GetAllCategories);
    } catch (error: any) {
        yield put(categorieApiResponseError(CategorieActionTypes.DELETE_CATEGORIE, error));
    }
}

export function* watchAddCategorie() {
    yield takeEvery(CategorieActionTypes.CREATE_CATEGORIE, AddCategorie);
}

export function* watchGetCategorieById() {
    yield takeEvery(CategorieActionTypes.Get_BY_ID_CATEGORIE, GetCategorieById);
}

export function* watchGetAllCategories() {
    yield takeEvery(CategorieActionTypes.Get_ALL_CATEGORIE, GetAllCategories);
}

export function* watchDeleteCategorie() {
    yield takeEvery(CategorieActionTypes.DELETE_CATEGORIE, DeleteCategorie);
}

export function* watchUpdateCategorie() {
    yield takeEvery(CategorieActionTypes.UPDATE_CATEGORIE, UpdateCategorie);
}

function* CategorieSaga() {
    yield all([fork(watchAddCategorie), fork(watchUpdateCategorie), fork(watchGetCategorieById), fork(watchGetAllCategories), fork(watchDeleteCategorie)]);
}

export default CategorieSaga;
