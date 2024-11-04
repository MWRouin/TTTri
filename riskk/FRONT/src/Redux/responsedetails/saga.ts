import { all, fork, put, takeEvery, call } from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/core';
import { APICore, setAuthorization } from '../../helpers/api/apiCore';
import { AddResponseDetails as AddResponsedetailsApi, 
  UpdateResponseDetails as UpdateResponsedetailsApi, 
  GetResponseDetailsById as GetResponsedetailsByIdApi, 
  GetResponseDetails as GetAllResponsedetailssApi, 
  DeleteResponseDetails as DeleteResponsedetailsApi } from '../../helpers/';
import { ResponsedetailsApiResponseSuccess, ResponsedetailsApiResponseError } from './actions';
import { ResponsedetailsActionTypes } from './constants';
import { ResponseDetails } from './type';

type ResponsedetailsData = {
  payload: ResponseDetails;
  type: string;
};

const api = new APICore();

function* AddResponsedetails({ payload }: ResponsedetailsData): SagaIterator {
  console.log('payload saga AddResponsedetails');
  console.log(payload);
  // try {
  //   const response = yield call(AddResponsedetailsApi, payload);
  //   const data = response.data;
  //   console.log(response);

  //   if (data === true) {
  //     yield put(ResponsedetailsApiResponseSuccess(ResponsedetailsActionTypes.CREATE_REPONSEDETAILS, data));
  //     yield call(GetAllResponsedetailss);
  //   }
  // } catch (error: any) {
  //   yield put(ResponsedetailsApiResponseError(ResponsedetailsActionTypes.CREATE_REPONSEDETAILS, error));
  // }
}

function* GetResponsedetailsById({ payload: { responseDetailsId } }: ResponsedetailsData): SagaIterator {
  try {
    const response = yield call(GetResponsedetailsByIdApi, { responseDetailsId });
    const Responsedetails = response.data;
    yield put(ResponsedetailsApiResponseSuccess(ResponsedetailsActionTypes.Get_BY_ID_REPONSEDETAILS, Responsedetails));
  } catch (error: any) {
    yield put(ResponsedetailsApiResponseError(ResponsedetailsActionTypes.Get_BY_ID_REPONSEDETAILS, error));
  }
}

function* GetAllResponsedetailss(): SagaIterator {
  try {
    console.log('payload saga AddResponsedetails');
    const response = yield call(GetAllResponsedetailssApi);
    const Responsedetailss = response.data;
    yield put(ResponsedetailsApiResponseSuccess(ResponsedetailsActionTypes.Get_ALL_REPONSEDETAILS, Responsedetailss));
  } catch (error: any) {
    yield put(ResponsedetailsApiResponseError(ResponsedetailsActionTypes.Get_ALL_REPONSEDETAILS, error));
  }
}

function* DeleteResponsedetails({ payload: { responseDetailsId } }: ResponsedetailsData): SagaIterator {
  // try {
  //     const response = yield call(DeleteResponsedetailsApi, { responseDetailsId });
  //     yield put(ResponsedetailsApiResponseSuccess(ResponsedetailsActionTypes.DELETE_REPONSEDETAILS, response.data));
  // } catch (error: any) {
  //     yield put(ResponsedetailsApiResponseError(ResponsedetailsActionTypes.DELETE_REPONSEDETAILS, error));
  // }
}
function* UpdateResponsedetails({ payload: { responseDetailsId,description , responseId , answerId} }: ResponsedetailsData): SagaIterator {
  //     try {
  //         const response = yield call(UpdateResponsedetailsApi, { responseDetailsId,description , responseId , answerId });
  //         const Responsedetails = response.data;
  //         yield put(ResponsedetailsApiResponseSuccess(ResponsedetailsActionTypes.UPDATE_REPONSEDETAILS, Responsedetails));
  //     } catch (error: any) {
  //         yield put(ResponsedetailsApiResponseError(ResponsedetailsActionTypes.UPDATE_REPONSEDETAILS, error));
  //     }
}

export function* watchAddResponsedetails() {
  yield takeEvery(ResponsedetailsActionTypes.CREATE_REPONSEDETAILS, AddResponsedetails);
}

export function* watchGetResponsedetailsById() {
  yield takeEvery(ResponsedetailsActionTypes.Get_BY_ID_REPONSEDETAILS, GetResponsedetailsById);
}

export function* watchGetAllResponsedetailss() {
  yield takeEvery(ResponsedetailsActionTypes.Get_ALL_REPONSEDETAILS, GetAllResponsedetailss);
}

export function* watchDeleteResponsedetails() {
  yield takeEvery(ResponsedetailsActionTypes.DELETE_REPONSEDETAILS, DeleteResponsedetails);
}

export function* watchUpdateResponsedetails() {
  yield takeEvery(ResponsedetailsActionTypes.UPDATE_REPONSEDETAILS, UpdateResponsedetails);
}

function* ResponsedetailsSaga() {
  yield all([fork(watchAddResponsedetails), fork(watchUpdateResponsedetails), fork(watchGetResponsedetailsById), fork(watchGetAllResponsedetailss), fork(watchDeleteResponsedetails)]);
}

export default ResponsedetailsSaga;
