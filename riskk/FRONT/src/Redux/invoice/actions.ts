import { InvoiceActionTypes } from "./constants";
import { Invoice } from "./type";

export type InvoiceActionType = {
  type:
    | InvoiceActionTypes.API_RESPONSE_SUCCESS
    | InvoiceActionTypes.API_RESPONSE_ERROR
    | InvoiceActionTypes.Get_ALL_INVOICE
    | InvoiceActionTypes.Get_BY_ID_INVOICE
    | InvoiceActionTypes.UPDATE_INVOICE
    | InvoiceActionTypes.DELETE_INVOICE
    | InvoiceActionTypes.CREATE_INVOICE;
  payload: {} | string;
};

type InvoiceData = {
  payload: Invoice;
  type: string;
};

export const InvoiceApiResponseSuccess = (actionType: string, data: InvoiceData | {}): InvoiceActionType => ({
  type: InvoiceActionTypes.API_RESPONSE_SUCCESS,
  payload: { actionType, data },
});
export const InvoiceApiResponseError = (actionType: string, error: string): InvoiceActionType => ({
  type: InvoiceActionTypes.API_RESPONSE_ERROR,
  payload: { actionType, error },
});

export const AddInvoice = (Invoice: Invoice): InvoiceActionType => ({
  type: InvoiceActionTypes.CREATE_INVOICE,
  payload: Invoice,
});

export const DeleteInvoice = (): InvoiceActionType => ({
  type: InvoiceActionTypes.DELETE_INVOICE,
  payload: {},
});

export const GetAllInvoices = (): InvoiceActionType => ({
  type: InvoiceActionTypes.Get_ALL_INVOICE,
  payload: {},
});

export const GetInvoiceById = (): InvoiceActionType => ({
  type: InvoiceActionTypes.Get_BY_ID_INVOICE,
  payload: {},
});

export const UpdateInvoice = (): InvoiceActionType => ({
  type: InvoiceActionTypes.UPDATE_INVOICE,
  payload: {},
});
