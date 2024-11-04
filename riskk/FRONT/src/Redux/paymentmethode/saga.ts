import { all, fork, put, takeEvery, call } from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/core';
import { APICore, setAuthorization } from '../../helpers/api/apiCore';
import { AddPaymentMethode as AddPaymentMethodeApi, 
  UpdatePaymentMethode as UpdatePaymentMethodeApi, 
  GetPaymentMethodeById as GetPaymentMethodeByIdApi, 
  GetPaymentMethodes as GetAllPaymentMethodesApi, 
  DeletePaymentMethode as DeletePaymentMethodeApi } from '../../helpers/';
import { PaymentMethodeApiResponseSuccess, PaymentMethodeApiResponseError } from './actions';
import { PaymentMethodeActionTypes } from './constants';
import { PaymentMethode } from './type';

type PaymentMethodeData = {
  payload: PaymentMethode;
  type: string;
};

const api = new APICore();

function* AddPaymentMethode({ payload }: PaymentMethodeData): SagaIterator {
  // console.log('payload saga AddPaymentMethode');
  // console.log(payload);
  // try {
  //   const response = yield call(AddPaymentMethodeApi, payload);
  //   const data = response.data;
  //   console.log(response);

  //   if (data === true) {
  //     yield put(PaymentMethodeApiResponseSuccess(PaymentMethodeActionTypes.CREATE_PAYMENTMETHODE, data));
  //     yield call(GetAllPaymentMethodes);
  //   }
  // } catch (error: any) {
  //   yield put(PaymentMethodeApiResponseError(PaymentMethodeActionTypes.CREATE_PAYMENTMETHODE, error));
  // }
}

function* GetPaymentMethodeById({ payload: { paymentMethodeId } }: PaymentMethodeData): SagaIterator {
  try {
    const response = yield call(GetPaymentMethodeByIdApi, { paymentMethodeId });
    const PaymentMethode = response.data;
    yield put(PaymentMethodeApiResponseSuccess(PaymentMethodeActionTypes.Get_BY_ID_PAYMENTMETHODE, PaymentMethode));
  } catch (error: any) {
    yield put(PaymentMethodeApiResponseError(PaymentMethodeActionTypes.Get_BY_ID_PAYMENTMETHODE, error));
  }
}

function* GetAllPaymentMethodes(): SagaIterator {
  try {
    console.log('payload saga AddPaymentMethode');
    const response = yield call(GetAllPaymentMethodesApi);
    const PaymentMethodes = response.data;
    yield put(PaymentMethodeApiResponseSuccess(PaymentMethodeActionTypes.Get_ALL_PAYMENTMETHODE, PaymentMethodes));
  } catch (error: any) {
    yield put(PaymentMethodeApiResponseError(PaymentMethodeActionTypes.Get_ALL_PAYMENTMETHODE, error));
  }
}

function* DeletePaymentMethode({ payload: { paymentMethodeId } }: PaymentMethodeData): SagaIterator {
  // try {
  //     const response = yield call(DeletePaymentMethodeApi, { paymentMethodeId });
  //     yield put(PaymentMethodeApiResponseSuccess(PaymentMethodeActionTypes.DELETE_PAYMENTMETHODE, response.data));
  // } catch (error: any) {
  //     yield put(PaymentMethodeApiResponseError(PaymentMethodeActionTypes.DELETE_PAYMENTMETHODE, error));
  // }
}
function* UpdatePaymentMethode({ payload: { paymentMethodeId, paymentMehodeName } }: PaymentMethodeData): SagaIterator {
  //     try {
  //         const response = yield call(UpdatePaymentMethodeApi, { paymentMethodeId, paymentMehodeName });
  //         const PaymentMethode = response.data;
  //         yield put(PaymentMethodeApiResponseSuccess(PaymentMethodeActionTypes.UPDATE_PAYMENTMETHODE, PaymentMethode));
  //     } catch (error: any) {
  //         yield put(PaymentMethodeApiResponseError(PaymentMethodeActionTypes.UPDATE_PAYMENTMETHODE, error));
  //     }
}

export function* watchAddPaymentMethode() {
  yield takeEvery(PaymentMethodeActionTypes.CREATE_PAYMENTMETHODE, AddPaymentMethode);
}

export function* watchGetPaymentMethodeById() {
  yield takeEvery(PaymentMethodeActionTypes.Get_BY_ID_PAYMENTMETHODE, GetPaymentMethodeById);
}

export function* watchGetAllPaymentMethodes() {
  yield takeEvery(PaymentMethodeActionTypes.Get_ALL_PAYMENTMETHODE, GetAllPaymentMethodes);
}

export function* watchDeletePaymentMethode() {
  yield takeEvery(PaymentMethodeActionTypes.DELETE_PAYMENTMETHODE, DeletePaymentMethode);
}

export function* watchUpdatePaymentMethode() {
  yield takeEvery(PaymentMethodeActionTypes.UPDATE_PAYMENTMETHODE, UpdatePaymentMethode);
}

function* PaymentMethodeSaga() {
  yield all([fork(watchAddPaymentMethode), fork(watchUpdatePaymentMethode), fork(watchGetPaymentMethodeById), fork(watchGetAllPaymentMethodes), fork(watchDeletePaymentMethode)]);
}

export default PaymentMethodeSaga;
