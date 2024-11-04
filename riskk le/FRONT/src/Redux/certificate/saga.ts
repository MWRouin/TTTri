import { all, fork, put, takeEvery, call } from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/core';
import { APICore, setAuthorization } from '../../helpers/api/apiCore';
import { certificateApiResponseSuccess, certificateApiResponseError } from './actions';
import { CertificateActionTypes } from './constants';

import {
    AddCertificate as AddCertificateApi,
    UpdateCertificate as UpdateCertificateApi,
    GetCertificateById as GetCertificateByIdApi,
    GetCertificates as GetAllCertificatesApi,
    DeleteCertificate as DeleteCertificateApi,
} from '../../helpers/';
import { Certificate } from './type';

type CertificateData = {
    payload: Certificate;
    type: string;
  };
  
  const api = new APICore();
  
//   function* AddCertificate{ payload }: CertificateData): SagaIterator {
//     // try {
//     //   const response = yield call(AddCertificateApi, payload);
//     //   const data = response.data;
//     //   console.log(response);
  
//     //   if (data === true) {
//     //     yield put(certificateApiResponseError(CertificateActionTypes.CREATE_CERTIFICATE, data));
//     //     yield call(GetAllCertificates);
//     //   }
//     // } catch (error: any) {
//     //   yield put(certificateApiResponseSuccess(CertificateActionTypes.CREATE_CERTIFICATE, error));
//     // }
//   }

function* GetCertificateById({ payload: { CertificateId } }: CertificateData): SagaIterator {
    try {
        const response = yield call(GetCertificateByIdApi, { CertificateId });
        const certificate = response.data;
        yield put(certificateApiResponseSuccess(CertificateActionTypes.Get_ALL_CERTIFICATES, certificate));
    } catch (error: any) {
        yield put(certificateApiResponseError(CertificateActionTypes.Get_BY_ID_CERTIFICATE, error));
    }
}

function* GetAllCertificates(): SagaIterator {
    try {
        const response = yield call(GetAllCertificatesApi);
        const certificates = response.data;
        yield put(certificateApiResponseSuccess(CertificateActionTypes.Get_ALL_CERTIFICATES, certificates));
    } catch (error: any) {
        yield put(certificateApiResponseError(CertificateActionTypes.Get_ALL_CERTIFICATES, error));
    }
}

function* DeleteCertificate({ payload: {CertificateId } }: CertificateData): SagaIterator {
    // try {
    //     const response = yield call(DeleteCertificateApi, { CertificateId });
    //     yield put(certificateApiResponseSuccess(CertificateActionTypes.DELETE_CERTIFICATE, response.data));
    // } catch (error: any) {
    //     yield put(certificateApiResponseError(CertificateActionTypes.DELETE_CERTIFICATE, error));
    // }
}

function* UpdateCertificate({ payload: {CertificateId, CertificateName, UserId, CourseId } }: CertificateData): SagaIterator {
//     try {
//         const response = yield call(UpdateCertificateApi, {CertificateId, CertificateName, UserId, CourseId });
//         const certificate = response.data;
//         yield put(certificateApiResponseSuccess(CertificateActionTypes.UPDATE_CERTIFICATE, certificate));
//     } catch (error: any) {
//         yield put(certificateApiResponseError(CertificateActionTypes.UPDATE_CERTIFICATE, error));
//     }
}



// export function* watchAddCertificate() {
//     yield takeEvery(CertificateActionTypes.CREATE_CERTIFICATE, AddCertificate);
// }

export function* watchGetCertificateById() {
    yield takeEvery(CertificateActionTypes.Get_BY_ID_CERTIFICATE, GetCertificateById);
}


export function* watchGetAllCertificates() {
    yield takeEvery(CertificateActionTypes.Get_ALL_CERTIFICATES, GetAllCertificates);
}

export function* watchDeleteCertificate() {
    yield takeEvery(CertificateActionTypes.DELETE_CERTIFICATE, DeleteCertificate);
}

export function* watchUpdateCertificate() {
    yield takeEvery(CertificateActionTypes.UPDATE_CERTIFICATE, UpdateCertificate);
}


function*CertificateSaga() {
    yield all([
       // fork(watchAddCertificate),
        fork(watchUpdateCertificate),
        fork(watchGetCertificateById),
        fork(watchGetAllCertificates),
        fork(watchDeleteCertificate),
    ]);
}

export default CertificateSaga;
