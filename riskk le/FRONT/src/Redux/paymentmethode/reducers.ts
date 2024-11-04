import { APICore } from '../../helpers/api/apiCore';
import { PaymentMethodeActionTypes } from './constants';

const api = new APICore();
const INIT_STATE = {
  ListPaymentMethodes: null,
  PaymentMethode: null,
  type: '',
};

type PaymentMethodeData = {
  payload: {
    paymentMethodeId?: number;
    paymentMehodeName: string;
  };
  type: string;
};

type PaymentMethodeActionType = {
  type:
    | PaymentMethodeActionTypes.API_RESPONSE_SUCCESS
    | PaymentMethodeActionTypes.API_RESPONSE_ERROR
    | PaymentMethodeActionTypes.Get_ALL_PAYMENTMETHODE
    | PaymentMethodeActionTypes.Get_BY_ID_PAYMENTMETHODE
    | PaymentMethodeActionTypes.UPDATE_PAYMENTMETHODE
    | PaymentMethodeActionTypes.DELETE_PAYMENTMETHODE
    | PaymentMethodeActionTypes.CREATE_PAYMENTMETHODE;
  payload: {
    actionType?: string;
    data?: PaymentMethodeData | {};
    error?: string;
  };
};

interface State {
  ListPaymentMethodes?: PaymentMethodeData[];
  PaymentMethode?: PaymentMethodeData;
  type: string;
}

const PaymentMethode = (state: any = INIT_STATE, action: PaymentMethodeActionType): any => {
  switch (action.type) {
    case PaymentMethodeActionTypes.API_RESPONSE_SUCCESS:
      switch (action.payload.actionType) {
        case PaymentMethodeActionTypes.Get_ALL_PAYMENTMETHODE: {
          return {
            ...state,
            ListPaymentMethodes: action.payload.data,
          };
        }
        case PaymentMethodeActionTypes.UPDATE_PAYMENTMETHODE: {
          return {
            ...state,
            PaymentMethode: action.payload,
          };
        }
        case PaymentMethodeActionTypes.Get_BY_ID_PAYMENTMETHODE: {
          return {
            ...state,
            PaymentMethode: action.payload,
          };
        }
        case PaymentMethodeActionTypes.DELETE_PAYMENTMETHODE: {
          return {
            ...state,
            PaymentMethode: action.payload,
          };
        }
        case PaymentMethodeActionTypes.CREATE_PAYMENTMETHODE: {
          return {
            ...state,
            PaymentMethode: action.payload,
            ListPaymentMethodes: [],
          };
        }
        default:
          return { ...state };
      }

    case PaymentMethodeActionTypes.API_RESPONSE_ERROR:
      switch (action.payload.actionType) {
        case PaymentMethodeActionTypes.Get_ALL_PAYMENTMETHODE: {
          return {
            ...state,
            ListPaymentMethodes: null,
            error: action.payload.error,
          };
        }
        case PaymentMethodeActionTypes.UPDATE_PAYMENTMETHODE: {
          return {
            ...state,
            PaymentMethode: null,
            error: action.payload.error,
          };
        }
        case PaymentMethodeActionTypes.Get_BY_ID_PAYMENTMETHODE: {
          return {
            ...state,
            PaymentMethode: null,
            error: action.payload.error,
          };
        }
        case PaymentMethodeActionTypes.DELETE_PAYMENTMETHODE: {
          return {
            ...state,
            PaymentMethode: null,
            error: action.payload.error,
          };
        }
        case PaymentMethodeActionTypes.CREATE_PAYMENTMETHODE: {
          return {
            ...state,
            PaymentMethode: null,
            error: action.payload.error,
          };
        }
        default:
          return { ...state };
      }

    case PaymentMethodeActionTypes.CREATE_PAYMENTMETHODE:
      return { ...state };
    case PaymentMethodeActionTypes.DELETE_PAYMENTMETHODE:
      return { ...state };
    case PaymentMethodeActionTypes.UPDATE_PAYMENTMETHODE:
      return { ...state };
    case PaymentMethodeActionTypes.Get_BY_ID_PAYMENTMETHODE:
      return { ...state };
    case PaymentMethodeActionTypes.Get_ALL_PAYMENTMETHODE:
      return { ...state };
    default:
      return { ...state };
  }
};

export default PaymentMethode;
