import { all, fork, put, takeEvery, call } from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/core';
import { favoriteApiResponseError, favoriteApiResponseSuccess } from './actions';
import { FavoriteActionTypes } from './constants';
import { AddFavorite as AddFavoriteApi, DeleteFavorite as DeleteFavoriteApi, GetFavorites as GetAllFavoritesApi } from '../../helpers/api/favorite';
import { Favorite } from './type';

interface FavoriteData {
    payload: Favorite;
    type: string;
}

function* AddFavorite({ payload }: any): SagaIterator {
    try {
        const response = yield call(AddFavoriteApi, payload);
        const data = response.data;

        if (data) {
            yield put(favoriteApiResponseSuccess(FavoriteActionTypes.CREATE_FAVORITE, data));
            yield call(GetAllFavoritesApi);
        }
    } catch (error: any) {
        yield put(favoriteApiResponseError(FavoriteActionTypes.CREATE_FAVORITE, error));
    }
}

function* GetAllFavorites(): SagaIterator {
    try {
        const response = yield call(GetAllFavoritesApi);
        const favorites = response.data;
        console.log(response);
        yield put(favoriteApiResponseSuccess(FavoriteActionTypes.Get_ALL_FAVORITES, favorites));
    } catch (error: any) {
        yield put(favoriteApiResponseError(FavoriteActionTypes.Get_ALL_FAVORITES, error));
    }
}

function* DeleteFavorite({ payload: { favoriteId } }: FavoriteData): SagaIterator {
    try {
        const response = yield call(DeleteFavoriteApi, favoriteId);
        const feedback = response.data;
        yield put(favoriteApiResponseSuccess(FavoriteActionTypes.DELETE_FAVORITE, feedback));
        yield call(GetAllFavorites);
    } catch (error: any) {
        yield put(favoriteApiResponseError(FavoriteActionTypes.DELETE_FAVORITE, error));
    }
}

export function* watchAddFavorite() {
    yield takeEvery(FavoriteActionTypes.CREATE_FAVORITE, AddFavorite);
}

export function* watchGetAllFavorites() {
    yield takeEvery(FavoriteActionTypes.Get_ALL_FAVORITES, GetAllFavorites);
}

export function* watchDeleteFavorite() {
    yield takeEvery(FavoriteActionTypes.DELETE_FAVORITE, DeleteFavorite);
}

function* FeedbackSaga() {
    yield all([fork(watchAddFavorite), fork(watchGetAllFavorites), fork(watchDeleteFavorite)]);
}

export default FeedbackSaga;
