import { all, fork, put, takeEvery, call } from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/core';
import { APICore, setAuthorization } from '../../helpers/api/apiCore';
import { AddReclaim as AddReclaimApi, UpdateReclaim as UpdateReclaimApi, GetReclaimById as GetReclaimByIdApi, GetAllReclaims as GetAllReclaimsApi, DeleteReclaim as DeleteReclaimApi } from '../../helpers/';
import { ReclaimActionTypes } from './constants';
import { Reclaim } from './type';
import { reclaimApiResponseSuccess, reclaimApiResponseError } from './actions';

type ReclaimData = {
  payload: Reclaim;
  type: string;
};

const api = new APICore();

function* AddReclaim({ payload }: ReclaimData): SagaIterator {
  console.log('payload saga AddReclaim');
  console.log(payload);
  try {
    const response = yield call(AddReclaimApi, payload);
    const data = response.data;
    console.log(response);

    if (data === true) {
      yield put(reclaimApiResponseSuccess(ReclaimActionTypes.CREATE_RECLAIM, data));
      yield call(GetAllReclaims);
    }
  } catch (error: any) {
    yield put(reclaimApiResponseError(ReclaimActionTypes.CREATE_RECLAIM, error));
  }
}

function* GetReclaimById({ payload: { reclaimID } }: ReclaimData): SagaIterator {
  try {
    const response = yield call(GetReclaimByIdApi, { reclaimID });
    const reclaim = response.data;
    yield put(reclaimApiResponseSuccess(ReclaimActionTypes.Get_BY_ID_RECLAIM, reclaim));
  } catch (error: any) {
    yield put(reclaimApiResponseError(ReclaimActionTypes.Get_BY_ID_RECLAIM, error));
  }
}

function* GetAllReclaims(): SagaIterator {
  try {
    console.log('payload saga AddReclaim');
    const response = yield call(GetAllReclaimsApi);
    const reclaims = response.data;
    yield put(reclaimApiResponseSuccess(ReclaimActionTypes.Get_ALL_RECLAIM, reclaims));
  } catch (error: any) {
    yield put(reclaimApiResponseError(ReclaimActionTypes.Get_ALL_RECLAIM, error));
  }
}

function* DeleteReclaim({ payload }: any): SagaIterator {
  try {
    const response = yield call(DeleteReclaimApi, payload.id);
    yield put(reclaimApiResponseSuccess(ReclaimActionTypes.DELETE_RECLAIM, response.data));
    yield call(GetAllReclaims);
  } catch (error: any) {
    yield put(reclaimApiResponseError(ReclaimActionTypes.DELETE_RECLAIM, error));
  }
}
function* UpdateReclaim({ payload }: any): SagaIterator {
  try {
    const response = yield call(UpdateReclaimApi, payload.reclaim);
    const reclaim = response.data;
    yield put(reclaimApiResponseSuccess(ReclaimActionTypes.UPDATE_RECLAIM, reclaim));
    yield call(GetAllReclaims);
  } catch (error: any) {
    yield put(reclaimApiResponseError(ReclaimActionTypes.UPDATE_RECLAIM, error));
  }
}

export function* watchAddReclaim() {
  yield takeEvery(ReclaimActionTypes.CREATE_RECLAIM, AddReclaim);
}

export function* watchGetReclaimById() {
  yield takeEvery(ReclaimActionTypes.Get_BY_ID_RECLAIM, GetReclaimById);
}

export function* watchGetAllReclaims() {
  yield takeEvery(ReclaimActionTypes.Get_ALL_RECLAIM, GetAllReclaims);
}

export function* watchDeleteReclaim() {
  yield takeEvery(ReclaimActionTypes.DELETE_RECLAIM, DeleteReclaim);
}

export function* watchUpdateReclaim() {
  yield takeEvery(ReclaimActionTypes.UPDATE_RECLAIM, UpdateReclaim);
}

function* ReclaimSaga() {
  yield all([fork(watchAddReclaim), fork(watchUpdateReclaim), fork(watchGetReclaimById), fork(watchGetAllReclaims), fork(watchDeleteReclaim)]);
}

export default ReclaimSaga;
