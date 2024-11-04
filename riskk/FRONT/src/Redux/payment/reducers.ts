import { APICore } from '../../helpers/api/apiCore';
import { PaymentActionTypes } from './constants';

const api = new APICore();
const INIT_STATE = {
  ListPayments: null,
  Payment: null,
  type: '',
};

type PaymentData = {
  payload: {
    paymentId?: number;
    amount: number;
    paymentDate: Date;
    inscriptionId?: number;
    paymentMethodeId?: number;
    invoiceId?: number;
  };
  type: string;
};

type PaymentActionType = {
  type:
    | PaymentActionTypes.API_RESPONSE_SUCCESS
    | PaymentActionTypes.API_RESPONSE_ERROR
    | PaymentActionTypes.Get_ALL_PAYMENT
    | PaymentActionTypes.Get_BY_ID_PAYMENT
    | PaymentActionTypes.CREATE_PAYMENT
    | PaymentActionTypes.DELETE_PAYMENT
    | PaymentActionTypes.CREATE_PAYMENT;
  payload: {
    actionType?: string;
    data?: PaymentData | {};
    error?: string;
  };
};

interface State {
  ListPayments?: PaymentData[];
  Payment?: PaymentData;
  type: string;
}

const Payment = (state: any = INIT_STATE, action: PaymentActionType): any => {
  switch (action.type) {
    case PaymentActionTypes.API_RESPONSE_SUCCESS:
      switch (action.payload.actionType) {
        case PaymentActionTypes.Get_ALL_PAYMENT: {
          return {
            ...state,
            ListPayments: action.payload.data,
          };
        }
        case PaymentActionTypes.CREATE_PAYMENT: {
          return {
            ...state,
            Payment: action.payload,
          };
        }
        case PaymentActionTypes.Get_BY_ID_PAYMENT: {
          return {
            ...state,
            Payment: action.payload,
          };
        }
        case PaymentActionTypes.DELETE_PAYMENT: {
          return {
            ...state,
            Payment: action.payload,
          };
        }
        case PaymentActionTypes.CREATE_PAYMENT: {
          return {
            ...state,
            Payment: action.payload,
            ListPayments: [],
          };
        }
        default:
          return { ...state };
      }

    case PaymentActionTypes.API_RESPONSE_ERROR:
      switch (action.payload.actionType) {
        case PaymentActionTypes.Get_ALL_PAYMENT: {
          return {
            ...state,
            ListPayments: null,
            error: action.payload.error,
          };
        }
        case PaymentActionTypes.CREATE_PAYMENT: {
          return {
            ...state,
            Payment: null,
            error: action.payload.error,
          };
        }
        case PaymentActionTypes.Get_BY_ID_PAYMENT: {
          return {
            ...state,
            Payment: null,
            error: action.payload.error,
          };
        }
        case PaymentActionTypes.DELETE_PAYMENT: {
          return {
            ...state,
            Payment: null,
            error: action.payload.error,
          };
        }
        case PaymentActionTypes.CREATE_PAYMENT: {
          return {
            ...state,
            Payment: null,
            error: action.payload.error,
          };
        }
        default:
          return { ...state };
      }

    case PaymentActionTypes.CREATE_PAYMENT:
      return { ...state };
    case PaymentActionTypes.DELETE_PAYMENT:
      return { ...state };
    case PaymentActionTypes.CREATE_PAYMENT:
      return { ...state };
    case PaymentActionTypes.Get_BY_ID_PAYMENT:
      return { ...state };
    case PaymentActionTypes.Get_ALL_PAYMENT:
      return { ...state };
    default:
      return { ...state };
  }
};

export default Payment;
