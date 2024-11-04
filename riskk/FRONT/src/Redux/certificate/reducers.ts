import { APICore } from '../../helpers/api/apiCore';
import {CertificateActionTypes } from './constants';

const api = new APICore();

const INIT_STATE = {
    ListCertificatess: null,
    Certificate: null,
    type: '',
  };
  
type CertificateData = {
    payload: {
        CertificateId: number;
        CertificateName: string;
        UserId: number;
        CourseId: number;
    };
    type: string;
};

type CertificateActionType = {
    type:
    | CertificateActionTypes.API_RESPONSE_SUCCESS
    | CertificateActionTypes.API_RESPONSE_ERROR
    | CertificateActionTypes.API_RESPONSE_SUCCESS
    | CertificateActionTypes.API_RESPONSE_ERROR
    | CertificateActionTypes.Get_ALL_CERTIFICATES
    | CertificateActionTypes.Get_BY_ID_CERTIFICATE
    | CertificateActionTypes.UPDATE_CERTIFICATE
    | CertificateActionTypes.DELETE_CERTIFICATE
    | CertificateActionTypes.CREATE_CERTIFICATE;
    payload: {
        actionType?: string;
        data?: CertificateData | {};
        error?: string;
    };
};

interface State {
  ListCertificates?: CertificateData[];
  Certificate?: CertificateData;
  type: string;
}

const Certificate = (state: any = INIT_STATE, action: CertificateActionType): any => {
    switch (action.type) {
        case CertificateActionTypes.API_RESPONSE_SUCCESS:
            switch (action.payload.actionType) {
                case CertificateActionTypes.Get_ALL_CERTIFICATES: {
                  return {
                    ...state,
                    ListCertificates: action.payload.data,
                  };
                }
                case CertificateActionTypes.UPDATE_CERTIFICATE: {
                  return {
                    ...state,
                    Certificate: action.payload,
                  };
                }
                case CertificateActionTypes.Get_BY_ID_CERTIFICATE: {
                  return {
                    ...state,
                    Certificate: action.payload,
                  };
                }
                case CertificateActionTypes.DELETE_CERTIFICATE: {
                  return {
                    ...state,
                    Certificate: action.payload,
                  };
                }
                case CertificateActionTypes.CREATE_CERTIFICATE: {
                  return {
                    ...state,
                    Certificate: action.payload,
                    ListCertificates: [],
                  };
                }
                default:
                  return { ...state };
              }
        
           
        case CertificateActionTypes.API_RESPONSE_ERROR:
            switch (action.payload.actionType) {

                case CertificateActionTypes.Get_ALL_CERTIFICATES: {
                    return {
                        ...state,
                        ResponseValue: null,
                        error: action.payload.error
                    };
                }
                case CertificateActionTypes.UPDATE_CERTIFICATE: {
                    return {
                        ...state,
                        ResponseValue: null,
                        error: action.payload.error
                    };
                }
                case CertificateActionTypes.Get_BY_ID_CERTIFICATE: {
                    return {
                        ...state,
                        ResponseValue: null,
                        error: action.payload.error
                    };
                }
                case CertificateActionTypes.DELETE_CERTIFICATE: {
                    return {
                        ...state,
                        ResponseValue: null,
                        error: action.payload.error
                    };
                }
                case CertificateActionTypes.CREATE_CERTIFICATE: {
                    return {
                        ...state,
                        ResponseValue: null,
                        error: action.payload.error
                    };
                }
                default:
                    return { ...state };
            }



              

            case CertificateActionTypes.CREATE_CERTIFICATE:
                return { ...state };
            case CertificateActionTypes.DELETE_CERTIFICATE:
                return { ...state };
            case CertificateActionTypes.UPDATE_CERTIFICATE:
                return { ...state };
            case CertificateActionTypes.Get_BY_ID_CERTIFICATE:
                return { ...state };
                case CertificateActionTypes.Get_ALL_CERTIFICATES:
                return { ...state };
        default:
            return { ...state };
    }
};

export default Certificate;   
