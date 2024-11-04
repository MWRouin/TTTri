import { ResponsedetailsActionTypes } from "./constants";
import { ResponseDetails } from "./type";

export type ResponsedetailsActionType = {
  type:
    | ResponsedetailsActionTypes.API_RESPONSE_SUCCESS
    | ResponsedetailsActionTypes.API_RESPONSE_ERROR
    | ResponsedetailsActionTypes.Get_ALL_REPONSEDETAILS
    | ResponsedetailsActionTypes.Get_BY_ID_REPONSEDETAILS
    | ResponsedetailsActionTypes.UPDATE_REPONSEDETAILS
    | ResponsedetailsActionTypes.DELETE_REPONSEDETAILS
    | ResponsedetailsActionTypes.CREATE_REPONSEDETAILS;
  payload: {} | string;
};

type ResponsedetailsData = {
  payload: ResponseDetails;
  type: string;
};

// common success
export const ResponsedetailsApiResponseSuccess = (actionType: string, data: ResponsedetailsData | {}): ResponsedetailsActionType => ({
  type: ResponsedetailsActionTypes.API_RESPONSE_SUCCESS,
  payload: { actionType, data },
});
// common error
export const ResponsedetailsApiResponseError = (actionType: string, error: string): ResponsedetailsActionType => ({
  type: ResponsedetailsActionTypes.API_RESPONSE_ERROR,
  payload: { actionType, error },
});

export const AddResponsedetails = (Responsedetails: ResponseDetails): ResponsedetailsActionType => ({
  type: ResponsedetailsActionTypes.CREATE_REPONSEDETAILS,
  payload: Responsedetails,
});

export const DeleteResponsedetails = (): ResponsedetailsActionType => ({
  type: ResponsedetailsActionTypes.DELETE_REPONSEDETAILS,
  payload: {},
});

export const GetAllResponsedetailss = (): ResponsedetailsActionType => ({
  type: ResponsedetailsActionTypes.Get_ALL_REPONSEDETAILS,
  payload: {},
});

export const GetResponsedetailsById = (): ResponsedetailsActionType => ({
  type: ResponsedetailsActionTypes.Get_BY_ID_REPONSEDETAILS,
  payload: {},
});

export const UpdateResponsedetails = (): ResponsedetailsActionType => ({
  type: ResponsedetailsActionTypes.UPDATE_REPONSEDETAILS,
  payload: {},
});
