import { ConformationActionTypes } from "./constants";
import { Confirmation } from "./type";

export type EmailConfirmationActionType = {
  type:
    | ConformationActionTypes.API_RESPONSE_SUCCESS
    | ConformationActionTypes.API_RESPONSE_ERROR
    | ConformationActionTypes.Get_ALL_CONFIRMATION
    | ConformationActionTypes.Get_BY_ID_CONFIRMATION
    | ConformationActionTypes.UPDATE_CONFIRMATION
    | ConformationActionTypes.DELETE_CONFIRMATION
    | ConformationActionTypes.CREATE_CONFIRMATION;
  payload: {} | string;
};

type EmailConfirmationData = {
  payload: Confirmation;
  type: string;
};

// common success
export const EmailConfirmationApiResponseSuccess = (actionType: string, data: EmailConfirmationData | {}): EmailConfirmationActionType => ({
  type: ConformationActionTypes.API_RESPONSE_SUCCESS,
  payload: { actionType, data },
});
// common error
export const EmailConfirmationApiResponseError = (actionType: string, error: string): EmailConfirmationActionType => ({
  type: ConformationActionTypes.API_RESPONSE_ERROR,
  payload: { actionType, error },
});

export const AddEmailConfirmation = (EmailConfirmation: Confirmation): EmailConfirmationActionType => ({
  type: ConformationActionTypes.CREATE_CONFIRMATION,
  payload: EmailConfirmation,
});

export const DeleteEmailConfirmation = (): EmailConfirmationActionType => ({
  type: ConformationActionTypes.DELETE_CONFIRMATION,
  payload: {},
});

export const GetAllEmailConfirmations = (): EmailConfirmationActionType => ({
  type: ConformationActionTypes.Get_ALL_CONFIRMATION,
  payload: {},
});

export const GetEmailConfirmationById = (): EmailConfirmationActionType => ({
  type: ConformationActionTypes.Get_BY_ID_CONFIRMATION,
  payload: {},
});

export const UpdateEmailConfirmation = (): EmailConfirmationActionType => ({
  type: ConformationActionTypes.UPDATE_CONFIRMATION,
  payload: {},
});
