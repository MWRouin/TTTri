import { all, fork, put, takeEvery, call } from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/core';
import { APICore, setAuthorization } from '../../helpers/api/apiCore';
import { AddPayment as AddPaymentApi, 
  UpdatePayment as UpdatePaymentApi, 
  GetPaymentById as GetPaymentByIdApi, 
  GetPayments as GetAllPaymentsApi, 
  DeletePayment as DeletePaymentApi } from '../../helpers/';
import { Payment } from './type';
import { PaymentActionTypes } from './constants';
import { PaymentApiResponseError, PaymentApiResponseSuccess } from './actions';

type PaymentData = {
  payload: Payment;
  type: string;
};

const api = new APICore();

function* AddPayment({ payload }: PaymentData): SagaIterator {
  // console.log('payload saga AddPayment');
  // console.log(payload);
  // try {
  //   const response = yield call(AddPaymentApi, payload);
  //   const data = response.data;
  //   console.log(response);

  //   if (data === true) {
  //     yield put(PaymentApiResponseSuccess(PaymentActionTypes.CREATE_PAYMENT, data));
  //     yield call(GetAllPayments);
  //   }
  // } catch (error: any) {
  //   yield put(PaymentApiResponseError(PaymentActionTypes.CREATE_PAYMENT, error));
  // }
}

function* GetPaymentById({ payload: { paymentId } }: PaymentData): SagaIterator {
  try {
    const response = yield call(GetPaymentByIdApi, { paymentId });
    const Payment = response.data;
    yield put(PaymentApiResponseSuccess(PaymentActionTypes.Get_BY_ID_PAYMENT, Payment));
  } catch (error: any) {
    yield put(PaymentApiResponseError(PaymentActionTypes.Get_BY_ID_PAYMENT, error));
  }
}

function* GetAllPayments(): SagaIterator {
  try {
    console.log('payload saga AddPayment');
    const response = yield call(GetAllPaymentsApi);
    const Payments = response.data;
    yield put(PaymentApiResponseSuccess(PaymentActionTypes.Get_ALL_PAYMENT, Payments));
  } catch (error: any) {
    yield put(PaymentApiResponseError(PaymentActionTypes.Get_ALL_PAYMENT, error));
  }
}

function* DeletePayment({ payload: { paymentId } }: PaymentData): SagaIterator {
  // try {
  //     const response = yield call(DeletePaymentApi, { paymentId });
  //     yield put(PaymentApiResponseSuccess(PaymentActionTypes.DELETE_PAYMENT, response.data));
  // } catch (error: any) {
  //     yield put(PaymentApiResponseError(PaymentActionTypes.DELETE_PAYMENT, error));
  // }
}
function* UpdatePayment({ payload: { paymentId,amount, paymentDate, inscriptionId, paymentMethodeId , invoiceId } }: PaymentData): SagaIterator {
  //     try {
  //         const response = yield call(UpdatePaymentApi, { paymentId,amount, paymentDate, inscriptionId, paymentMethodeId , invoiceId });
  //         const Payment = response.data;
  //         yield put(PaymentApiResponseSuccess(PaymentActionTypes.UPDATE_PAYMENT, Payment));
  //     } catch (error: any) {
  //         yield put(PaymentApiResponseError(PaymentActionTypes.UPDATE_PAYMENT, error));
  //     }
}

export function* watchAddPayment() {
  yield takeEvery(PaymentActionTypes.CREATE_PAYMENT, AddPayment);
}

export function* watchGetPaymentById() {
  yield takeEvery(PaymentActionTypes.Get_BY_ID_PAYMENT, GetPaymentById);
}

export function* watchGetAllPayments() {
  yield takeEvery(PaymentActionTypes.Get_ALL_PAYMENT, GetAllPayments);
}

export function* watchDeletePayment() {
  yield takeEvery(PaymentActionTypes.DELETE_PAYMENT, DeletePayment);
}

export function* watchUpdatePayment() {
  yield takeEvery(PaymentActionTypes.UPDATE_PAYMENT, UpdatePayment);
}

function* PaymentSaga() {
  yield all([fork(watchAddPayment), fork(watchUpdatePayment), fork(watchGetPaymentById), fork(watchGetAllPayments), fork(watchDeletePayment)]);
}

export default PaymentSaga;
