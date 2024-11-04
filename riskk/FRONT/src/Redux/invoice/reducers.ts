import { APICore } from '../../helpers/api/apiCore';
import { InvoiceActionTypes } from './constants';

const api = new APICore();
const INIT_STATE = {
  ListInvoices: null,
  Invoice: null,
  type: '',
};

type InvoiceData = {
  payload: {
    InvoiceId?: number;
    InvoiceDate: Date;
    TotaleAmount: number;
    PaymentStatus: string;
    UserId?: number;
  };
  type: string;
};

type InvoiceActionType = {
  type:
    | InvoiceActionTypes.API_RESPONSE_SUCCESS
    | InvoiceActionTypes.API_RESPONSE_ERROR
    | InvoiceActionTypes.Get_ALL_INVOICE
    | InvoiceActionTypes.Get_BY_ID_INVOICE
    | InvoiceActionTypes.UPDATE_INVOICE
    | InvoiceActionTypes.DELETE_INVOICE
    | InvoiceActionTypes.CREATE_INVOICE;
  payload: {
    actionType?: string;
    data?: InvoiceData | {};
    error?: string;
  };
};

interface State {
  ListInvoices?: InvoiceData[];
  Invoice?: InvoiceData;
  type: string;
}

const Invoice = (state: any = INIT_STATE, action: InvoiceActionType): any => {
  switch (action.type) {
    case InvoiceActionTypes.API_RESPONSE_SUCCESS:
      switch (action.payload.actionType) {
        case InvoiceActionTypes.Get_ALL_INVOICE: {
          return {
            ...state,
            ListInvoices: action.payload.data,
          };
        }
        case InvoiceActionTypes.UPDATE_INVOICE: {
          return {
            ...state,
            Invoice: action.payload,
          };
        }
        case InvoiceActionTypes.Get_BY_ID_INVOICE: {
          return {
            ...state,
            Invoice: action.payload,
          };
        }
        case InvoiceActionTypes.DELETE_INVOICE: {
          return {
            ...state,
            Invoice: action.payload,
          };
        }
        case InvoiceActionTypes.CREATE_INVOICE: {
          return {
            ...state,
            Invoice: action.payload,
            ListInvoices: [],
          };
        }
        default:
          return { ...state };
      }

    case InvoiceActionTypes.API_RESPONSE_ERROR:
      switch (action.payload.actionType) {
        case InvoiceActionTypes.Get_ALL_INVOICE: {
          return {
            ...state,
            ListInvoices: null,
            error: action.payload.error,
          };
        }
        case InvoiceActionTypes.UPDATE_INVOICE: {
          return {
            ...state,
            Invoice: null,
            error: action.payload.error,
          };
        }
        case InvoiceActionTypes.Get_BY_ID_INVOICE: {
          return {
            ...state,
            Invoice: null,
            error: action.payload.error,
          };
        }
        case InvoiceActionTypes.DELETE_INVOICE: {
          return {
            ...state,
            Invoice: null,
            error: action.payload.error,
          };
        }
        case InvoiceActionTypes.CREATE_INVOICE: {
          return {
            ...state,
            Invoice: null,
            error: action.payload.error,
          };
        }
        default:
          return { ...state };
      }

    case InvoiceActionTypes.CREATE_INVOICE:
      return { ...state };
    case InvoiceActionTypes.DELETE_INVOICE:
      return { ...state };
    case InvoiceActionTypes.UPDATE_INVOICE:
      return { ...state };
    case InvoiceActionTypes.Get_BY_ID_INVOICE:
      return { ...state };
    case InvoiceActionTypes.Get_ALL_INVOICE:
      return { ...state };
    default:
      return { ...state };
  }
};

export default Invoice;
