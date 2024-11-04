import { all, fork, put, takeEvery, call } from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/core';
import { APICore, setAuthorization } from '../../helpers/api/apiCore';
import { AddResponse as AddResponseApi, 
  UpdateResponse as UpdateResponseApi, 
  GetResponseById as GetResponseByIdApi, 
  GetResponses as GetAllResponsesApi, 
  DeleteResponse as DeleteResponseApi } from '../../helpers/';

import { Response } from './type';
import { ResponseApiResponseError, ResponseApiResponseSuccess } from './actions';
import { ResponseActionTypes } from './constants';

type ResponseData = {
  payload: Response;
  type: string;
};

const api = new APICore();

function* AddResponse({ payload }: ResponseData): SagaIterator {
  // console.log('payload saga AddResponse');
  // console.log(payload);
  // try {
  //   const response = yield call(AddResponseApi, payload);
  //   const data = response.data;
  //   console.log(response);

  //   if (data === true) {
  //     yield put(ResponseApiResponseSuccess(ResponseActionTypes.CREATE_RESPONSE, data));
  //     yield call(GetAllResponses);
  //   }
  // } catch (error: any) {
  //   yield put(ResponseApiResponseError(ResponseActionTypes.CREATE_RESPONSE, error));
  // }
}

function* GetResponseById({ payload: { responseId } }: ResponseData): SagaIterator {
  try {
    const response = yield call(GetResponseByIdApi, { responseId });
    const Response = response.data;
    yield put(ResponseApiResponseSuccess(ResponseActionTypes.Get_BY_ID_RESPONSE, Response));
  } catch (error: any) {
    yield put(ResponseApiResponseError(ResponseActionTypes.Get_BY_ID_RESPONSE, error));
  }
}

function* GetAllResponses(): SagaIterator {
  try {
    console.log('payload saga AddResponse');
    const response = yield call(GetAllResponsesApi);
    const Responses = response.data;
    yield put(ResponseApiResponseSuccess(ResponseActionTypes.Get_ALL_RESPONSE, Responses));
  } catch (error: any) {
    yield put(ResponseApiResponseError(ResponseActionTypes.Get_ALL_RESPONSE, error));
  }
}

function* DeleteResponse({ payload: { responseId } }: ResponseData): SagaIterator {
  // try {
  //     const response = yield call(DeleteResponseApi, { responseId });
  //     yield put(ResponseApiResponseSuccess(ResponseActionTypes.DELETE_RESPONSE, response.data));
  // } catch (error: any) {
  //     yield put(ResponseApiResponseError(ResponseActionTypes.DELETE_RESPONSE, error));
  // }
}
function* UpdateResponse({ payload: { responseId,value, userId, questionId } }: ResponseData): SagaIterator {
  //     try {
  //         const response = yield call(UpdateResponseApi, { responseId,value, userId, questionId});
  //         const Response = response.data;
  //         yield put(ResponseApiResponseSuccess(ResponseActionTypes.UPDATE_RESPONSE, Response));
  //     } catch (error: any) {
  //         yield put(ResponseApiResponseError(ResponseActionTypes.UPDATE_RESPONSE, error));
  //     }
}

export function* watchAddResponse() {
  yield takeEvery(ResponseActionTypes.CREATE_RESPONSE, AddResponse);
}

export function* watchGetResponseById() {
  yield takeEvery(ResponseActionTypes.Get_BY_ID_RESPONSE, GetResponseById);
}

export function* watchGetAllResponses() {
  yield takeEvery(ResponseActionTypes.Get_ALL_RESPONSE, GetAllResponses);
}

export function* watchDeleteResponse() {
  yield takeEvery(ResponseActionTypes.DELETE_RESPONSE, DeleteResponse);
}

export function* watchUpdateResponse() {
  yield takeEvery(ResponseActionTypes.UPDATE_RESPONSE, UpdateResponse);
}

function* ResponseSaga() {
  yield all([fork(watchAddResponse), fork(watchUpdateResponse), fork(watchGetResponseById), fork(watchGetAllResponses), fork(watchDeleteResponse)]);
}

export default ResponseSaga;
