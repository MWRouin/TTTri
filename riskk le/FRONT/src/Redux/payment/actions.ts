import { PaymentActionTypes } from './constants';
import { Payment } from './type';
export type PaymentActionType = {
  type:
    | PaymentActionTypes.API_RESPONSE_SUCCESS
    | PaymentActionTypes.API_RESPONSE_ERROR
    | PaymentActionTypes.Get_ALL_PAYMENT
    | PaymentActionTypes.Get_BY_ID_PAYMENT
    | PaymentActionTypes.UPDATE_PAYMENT
    | PaymentActionTypes.DELETE_PAYMENT
    | PaymentActionTypes.CREATE_PAYMENT;
  payload: {} | string;
};

type PaymentData = {
  payload: Payment;
  type: string;
};

// common success
export const PaymentApiResponseSuccess = (actionType: string, data: PaymentData | {}): PaymentActionType => ({
  type: PaymentActionTypes.API_RESPONSE_SUCCESS,
  payload: { actionType, data },
});
// common error
export const PaymentApiResponseError = (actionType: string, error: string): PaymentActionType => ({
  type: PaymentActionTypes.API_RESPONSE_ERROR,
  payload: { actionType, error },
});

export const AddPayment = (Payment: Payment): PaymentActionType => ({
  type: PaymentActionTypes.CREATE_PAYMENT,
  payload: Payment,
});

export const DeletePayment = (): PaymentActionType => ({
  type: PaymentActionTypes.DELETE_PAYMENT,
  payload: {},
});

export const GetAllPayments = (): PaymentActionType => ({
  type: PaymentActionTypes.Get_ALL_PAYMENT,
  payload: {},
});

export const GetPaymentById = (): PaymentActionType => ({
  type: PaymentActionTypes.Get_BY_ID_PAYMENT,
  payload: {},
});

export const UpdatePayment = (): PaymentActionType => ({
  type: PaymentActionTypes.UPDATE_PAYMENT,
  payload: {},
});
