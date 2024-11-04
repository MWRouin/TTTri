import { PaymentMethodeActionTypes } from "./constants";
import { PaymentMethode } from "./type";

export type PaymentMethodeActionType = {
  type:
    | PaymentMethodeActionTypes.API_RESPONSE_SUCCESS
    | PaymentMethodeActionTypes.API_RESPONSE_ERROR
    | PaymentMethodeActionTypes.Get_ALL_PAYMENTMETHODE
    | PaymentMethodeActionTypes.Get_BY_ID_PAYMENTMETHODE
    | PaymentMethodeActionTypes.UPDATE_PAYMENTMETHODE
    | PaymentMethodeActionTypes.DELETE_PAYMENTMETHODE
    | PaymentMethodeActionTypes.CREATE_PAYMENTMETHODE;
  payload: {} | string;
};

type PaymentMethodeData = {
  payload: PaymentMethode;
  type: string;
};

// common success
export const PaymentMethodeApiResponseSuccess = (actionType: string, data: PaymentMethodeData | {}): PaymentMethodeActionType => ({
  type: PaymentMethodeActionTypes.API_RESPONSE_SUCCESS,
  payload: { actionType, data },
});
// common error
export const PaymentMethodeApiResponseError = (actionType: string, error: string): PaymentMethodeActionType => ({
  type: PaymentMethodeActionTypes.API_RESPONSE_ERROR,
  payload: { actionType, error },
});

export const AddPaymentMethode = (PaymentMethode: PaymentMethode): PaymentMethodeActionType => ({
  type: PaymentMethodeActionTypes.CREATE_PAYMENTMETHODE,
  payload: PaymentMethode,
});

export const DeletePaymentMethode = (): PaymentMethodeActionType => ({
  type: PaymentMethodeActionTypes.DELETE_PAYMENTMETHODE,
  payload: {},
});

export const GetAllPaymentMethodes = (): PaymentMethodeActionType => ({
  type: PaymentMethodeActionTypes.Get_ALL_PAYMENTMETHODE,
  payload: {},
});

export const GetPaymentMethodeById = (): PaymentMethodeActionType => ({
  type: PaymentMethodeActionTypes.Get_BY_ID_PAYMENTMETHODE,
  payload: {},
});

export const UpdatePaymentMethode = (): PaymentMethodeActionType => ({
  type: PaymentMethodeActionTypes.UPDATE_PAYMENTMETHODE,
  payload: {},
});
