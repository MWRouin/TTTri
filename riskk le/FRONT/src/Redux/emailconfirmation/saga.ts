import { all, fork, put, takeEvery, call } from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/core';
import { APICore, setAuthorization } from '../../helpers/api/apiCore';
import { AddConfirmation as AddConfirmationApi, 
  UpdateConfirmation as UpdateConfirmationApi, 
  GetConfirmationById as GetConfirmationByIdApi, 
  GetConfirmations as GetAllConfirmationsApi, 
  DeleteConfirmation as DeleteConfirmationApi } from '../../helpers';
import { Confirmation } from './type';
import { ConformationActionTypes } from './constants';


type ConfirmationData = {
  payload: Confirmation;
  type: string;
};

const api = new APICore();

function* AddConfirmation({ payload }: ConfirmationData): SagaIterator {
  // console.log('payload saga AddConfirmation');
  // console.log(payload);
  // try {
  //   const response = yield call(AddConfirmationApi, payload);
  //   const data = response.data;
  //   console.log(response);

  //   if (data === true) {
  //     yield put(ConfirmationApiResponseError(ConformationActionTypes.CREATE_CONFIRMATION, data));
  //     yield call(GetAllConfirmations);
  //   }
  // } catch (error: any) {
  //   yield put(ConfirmationApiResponseError(ConformationActionTypes.CREATE_CONFIRMATION, error));
  // }
}

function* GetConfirmationById({ payload: { confirmationId } }: ConfirmationData): SagaIterator {
  try {
    const response = yield call(GetConfirmationByIdApi, { confirmationId });
    const Confirmation = response.data;
    yield put(ConfirmationApiResponseError(ConformationActionTypes.Get_BY_ID_CONFIRMATION, Confirmation));
  } catch (error: any) {
    yield put(ConfirmationApiResponseError(ConformationActionTypes.Get_BY_ID_CONFIRMATION, error));
  }
}

function* GetAllConfirmations(): SagaIterator {
  try {
    console.log('payload saga AddConfirmation');
    const response = yield call(GetAllConfirmationsApi);
    const Confirmations = response.data;
    yield put(ConfirmationApiResponseError(ConformationActionTypes.Get_ALL_CONFIRMATION, Confirmations));
  } catch (error: any) {
    yield put(ConfirmationApiResponseError(ConformationActionTypes.Get_ALL_CONFIRMATION, error));
  }
}

function* DeleteConfirmation({ payload: { confirmationId } }: ConfirmationData): SagaIterator {
  // try {
  //     const response = yield call(DeleteConfirmationApi, { confirmationId });
  //     yield put(ConfirmationApiResponseSuccess(ConformationActionTypes.DELETE_CONFIRMATION, response.data));
  // } catch (error: any) {
  //     yield put(ConfirmationApiResponseError(ConformationActionTypes.DELETE_CONFIRMATION, error));
  // }
}
function* UpdateConfirmation({ payload: { confirmationId,confirmationToken, sentDate, isConfirmed , userId , paymentId } }: ConfirmationData): SagaIterator {
  //     try {
  //         const response = yield call(UpdateConfirmationApi, { confirmationId,confirmationToken, sentDate, isConfirmed , userId , paymentId});
  //         const Confirmation = response.data;
  //         yield put(ConfirmationApiResponseSuccess(ConformationActionTypes.UPDATE_CONFIRMATION, Confirmation));
  //     } catch (error: any) {
  //         yield put(ConfirmationApiResponseError(ConformationActionTypes.UPDATE_CONFIRMATION, error));
  //     }
}

export function* watchAddConfirmation() {
  yield takeEvery(ConformationActionTypes.CREATE_CONFIRMATION, AddConfirmation);
}

export function* watchGetConfirmationById() {
  yield takeEvery(ConformationActionTypes.Get_BY_ID_CONFIRMATION, GetConfirmationById);
}

export function* watchGetAllConfirmations() {
  yield takeEvery(ConformationActionTypes.Get_ALL_CONFIRMATION, GetAllConfirmations);
}

export function* watchDeleteConfirmation() {
  yield takeEvery(ConformationActionTypes.DELETE_CONFIRMATION, DeleteConfirmation);
}

export function* watchUpdateConfirmation() {
  yield takeEvery(ConformationActionTypes.UPDATE_CONFIRMATION, UpdateConfirmation);
}

function* ConfirmationSaga() {
  yield all([fork(watchAddConfirmation), fork(watchUpdateConfirmation), fork(watchGetConfirmationById), fork(watchGetAllConfirmations), fork(watchDeleteConfirmation)]);
}

export default ConfirmationSaga;
function ConfirmationApiResponseError(CREATE_CONFIRMATION: any, error: any): any {
  throw new Error('Function not implemented.');
}

