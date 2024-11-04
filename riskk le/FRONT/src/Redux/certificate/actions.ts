import { CertificateActionTypes } from './constants';
import { Certificate } from './type';


export type CertificateActionType = {
    type:
    | CertificateActionTypes.API_RESPONSE_SUCCESS
    | CertificateActionTypes.API_RESPONSE_ERROR
    | CertificateActionTypes.Get_ALL_CERTIFICATES
    | CertificateActionTypes.Get_BY_ID_CERTIFICATE
    | CertificateActionTypes.UPDATE_CERTIFICATE
    | CertificateActionTypes.DELETE_CERTIFICATE
    | CertificateActionTypes.CREATE_CERTIFICATE;
    payload: {} | string;
};


type CertificateData = {
    payload: Certificate;
    type: string;
  };
  


export const certificateApiResponseSuccess = (actionType: string, data: CertificateData | {}): CertificateActionType => ({
    type: CertificateActionTypes.API_RESPONSE_SUCCESS,
    payload: { actionType, data },
});

export const certificateApiResponseError = (actionType: string, error: string): CertificateActionType => ({
    type: CertificateActionTypes.API_RESPONSE_ERROR,
    payload: { actionType, error },
});


export const AddCertificate = (CertificateId: number, CertificateName: string, UserId: number, CourseId: number): CertificateActionType => ({
    type: CertificateActionTypes.CREATE_CERTIFICATE,
    payload: { CertificateId, CertificateName, UserId, CourseId},
});

export const DeleteCertificate = (): CertificateActionType => ({
    type: CertificateActionTypes.DELETE_CERTIFICATE,
    payload: {},
});

export const GetAllCertificates = (): CertificateActionType => ({
    type: CertificateActionTypes.Get_ALL_CERTIFICATES,
    payload: {},
});

export const GetCertificateById = (): CertificateActionType => ({
    type: CertificateActionTypes.Get_BY_ID_CERTIFICATE,
    payload: {},
});

export const UpdateCertificate = (): CertificateActionType => ({
    type: CertificateActionTypes.UPDATE_CERTIFICATE,
    payload: {},
});


