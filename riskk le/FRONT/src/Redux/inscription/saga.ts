import { all, fork, put, takeEvery, call } from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/core';
import { APICore, setAuthorization } from '../../helpers/api/apiCore';
import { AddInscription as AddInscriptionApi, 
  UpdateInscription as UpdateInscriptionApi, 
  GetInscriptionById as GetInscriptionByIdApi, 
  GetInscriptions as GetAllInscriptionsApi, 
  DeleteInscription as DeleteInscriptionApi } from '../../helpers/';
import { InscriptionApiResponseSuccess, InscriptionApiResponseError } from './actions';
import { InscriptionActionTypes } from './constants';
import { Inscription } from './type';

type InscriptionData = {
  payload: Inscription;
  type: string;
};

const api = new APICore();

function* AddInscription({ payload }: InscriptionData): SagaIterator {

  // try {
  //   const response = yield call(AddInscriptionApi, payload);
  //   const data = response.data;
  //   console.log(response);

  //   if (data === true) {
  //     yield put(InscriptionApiResponseSuccess(InscriptionActionTypes.CREATE_INSCRIPTION, data));
  //     yield call(GetAllInscriptions);
  //   }
  // } catch (error: any) {
  //   yield put(InscriptionApiResponseError(InscriptionActionTypes.CREATE_INSCRIPTION, error));
  // }
}

function* GetInscriptionById({ payload: { InscriptionId } }: InscriptionData): SagaIterator {
  try {
    const response = yield call(GetInscriptionByIdApi, { InscriptionId });
    const Inscription = response.data;
    yield put(InscriptionApiResponseSuccess(InscriptionActionTypes.Get_BY_ID_INSCRIPTION, Inscription));
  } catch (error: any) {
    yield put(InscriptionApiResponseError(InscriptionActionTypes.Get_BY_ID_INSCRIPTION, error));
  }
}

function* GetAllInscriptions(): SagaIterator {
  try {
    console.log('payload saga AddInscription');
    const response = yield call(GetAllInscriptionsApi);
    const Inscriptions = response.data;
    yield put(InscriptionApiResponseSuccess(InscriptionActionTypes.Get_ALL_INSCRIPTION, Inscriptions));
  } catch (error: any) {
    yield put(InscriptionApiResponseError(InscriptionActionTypes.Get_ALL_INSCRIPTION, error));
  }
}

function* DeleteInscription({ payload: { InscriptionId } }: InscriptionData): SagaIterator {
  // try {
  //     const response = yield call(DeleteInscriptionApi, { InscriptionId });
  //     yield put(InscriptionApiResponseSuccess(InscriptionActionTypes.DELETE_INSCRIPTION, response.data));
  // } catch (error: any) {
  //     yield put(InscriptionApiResponseError(InscriptionActionTypes.DELETE_INSCRIPTION, error));
  // }
}
function* UpdateInscription({ payload: { InscriptionId, Name, Prix, CourseId, UserId  } }: InscriptionData): SagaIterator {
  //     try {
  //         const response = yield call(UpdateInscriptionApi, { InscriptionId, Name, Prix, CourseId, UserId  });
  //         const Inscription = response.data;
  //         yield put(InscriptionApiResponseSuccess(InscriptionActionTypes.UPDATE_INSCRIPTION, Inscription));
  //     } catch (error: any) {
  //         yield put(InscriptionApiResponseError(InscriptionActionTypes.UPDATE_INSCRIPTION, error));
  //     }
}

export function* watchAddInscription() {
  yield takeEvery(InscriptionActionTypes.CREATE_INSCRIPTION, AddInscription);
}

export function* watchGetInscriptionById() {
  yield takeEvery(InscriptionActionTypes.Get_BY_ID_INSCRIPTION, GetInscriptionById);
}

export function* watchGetAllInscriptions() {
  yield takeEvery(InscriptionActionTypes.Get_ALL_INSCRIPTION, GetAllInscriptions);
}

export function* watchDeleteInscription() {
  yield takeEvery(InscriptionActionTypes.DELETE_INSCRIPTION, DeleteInscription);
}

export function* watchUpdateInscription() {
  yield takeEvery(InscriptionActionTypes.UPDATE_INSCRIPTION, UpdateInscription);
}

function* InscriptionSaga() {
  yield all([fork(watchAddInscription), fork(watchUpdateInscription), fork(watchGetInscriptionById), fork(watchGetAllInscriptions), fork(watchDeleteInscription)]);
}

export default InscriptionSaga;
