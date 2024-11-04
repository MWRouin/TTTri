import { all, fork, put, takeEvery, call } from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/core';
import { APICore, setAuthorization } from '../../helpers/api/apiCore';
import { AddInvoice as AddInvoiceApi, 
  UpdateInvoice as UpdateInvoiceApi, 
  GetInvoiceById as GetInvoiceByIdApi, 
  GetInvoices as GetAllInvoicesApi, 
  DeleteInvoice as DeleteInvoiceApi } from '../../helpers/';
import { InvoiceApiResponseSuccess, InvoiceApiResponseError } from './actions';
import { InvoiceActionTypes } from './constants';
import { Invoice } from './type';

type InvoiceData = {
  payload: Invoice;
  type: string;
};

const api = new APICore();

function* AddInvoice({ payload }: InvoiceData): SagaIterator {
  // console.log('payload saga AddInvoice');
  // console.log(payload);
  // try {
  //   const response = yield call(AddInvoiceApi, payload);
  //   const data = response.data;
  //   console.log(response);

  //   if (data === true) {
  //     yield put(InvoiceApiResponseSuccess(InvoiceActionTypes.CREATE_INVOICE, data));
  //     yield call(GetAllInvoices);
  //   }
  // } catch (error: any) {
  //   yield put(InvoiceApiResponseError(InvoiceActionTypes.CREATE_INVOICE, error));
  // }
}

function* GetInvoiceById({ payload: { InvoiceId } }: InvoiceData): SagaIterator {
  try {
    const response = yield call(GetInvoiceByIdApi, { InvoiceId });
    const Invoice = response.data;
    yield put(InvoiceApiResponseSuccess(InvoiceActionTypes.Get_BY_ID_INVOICE, Invoice));
  } catch (error: any) {
    yield put(InvoiceApiResponseError(InvoiceActionTypes.Get_BY_ID_INVOICE, error));
  }
}

function* GetAllInvoices(): SagaIterator {
  try {
    console.log('payload saga AddInvoice');
    const response = yield call(GetAllInvoicesApi);
    const Invoices = response.data;
    yield put(InvoiceApiResponseSuccess(InvoiceActionTypes.Get_ALL_INVOICE, Invoices));
  } catch (error: any) {
    yield put(InvoiceApiResponseError(InvoiceActionTypes.Get_ALL_INVOICE, error));
  }
}

function* DeleteInvoice({ payload: { InvoiceId } }: InvoiceData): SagaIterator {
  // try {
  //     const response = yield call(DeleteInvoiceApi, { InvoiceId });
  //     yield put(InvoiceApiResponseSuccess(InvoiceActionTypes.DELETE_INVOICE, response.data));
  // } catch (error: any) {
  //     yield put(InvoiceApiResponseError(InvoiceActionTypes.DELETE_INVOICE, error));
  // }
}
function* UpdateInvoice({ payload: { InvoiceId ,InvoiceDate ,TotaleAmount, PaymentStatus ,UserId
} }: InvoiceData): SagaIterator {
  //     try {
  //         const response = yield call(UpdateInvoiceApi, { InvoiceId ,InvoiceDate ,TotaleAmount, PaymentStatus ,UserId});
  //         const Invoice = response.data;
  //         yield put(InvoiceApiResponseSuccess(InvoiceActionTypes.UPDATE_INVOICE, Invoice));
  //     } catch (error: any) {
  //         yield put(InvoiceApiResponseError(InvoiceActionTypes.UPDATE_INVOICE, error));
  //     }
}

export function* watchAddInvoice() {
  yield takeEvery(InvoiceActionTypes.CREATE_INVOICE, AddInvoice);
}

export function* watchGetInvoiceById() {
  yield takeEvery(InvoiceActionTypes.Get_BY_ID_INVOICE, GetInvoiceById);
}

export function* watchGetAllInvoices() {
  yield takeEvery(InvoiceActionTypes.Get_ALL_INVOICE, GetAllInvoices);
}

export function* watchDeleteInvoice() {
  yield takeEvery(InvoiceActionTypes.DELETE_INVOICE, DeleteInvoice);
}

export function* watchUpdateInvoice() {
  yield takeEvery(InvoiceActionTypes.UPDATE_INVOICE, UpdateInvoice);
}

function* InvoiceSaga() {
  yield all([fork(watchAddInvoice), fork(watchUpdateInvoice), fork(watchGetInvoiceById), fork(watchGetAllInvoices), fork(watchDeleteInvoice)]);
}

export default InvoiceSaga;
