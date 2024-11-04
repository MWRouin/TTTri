import { ResponseActionTypes } from './constants';
import { Response } from './type';

export type ResponseActionType = {
  type:
    | ResponseActionTypes.API_RESPONSE_SUCCESS
    | ResponseActionTypes.API_RESPONSE_ERROR
    | ResponseActionTypes.Get_ALL_RESPONSE
    | ResponseActionTypes.Get_BY_ID_RESPONSE
    | ResponseActionTypes.UPDATE_RESPONSE
    | ResponseActionTypes.DELETE_RESPONSE
    | ResponseActionTypes.CREATE_RESPONSE;
  payload: {} | string;
};

type ResponseData = {
  payload: Response;
  type: string;
};

// common success
export const ResponseApiResponseSuccess = (actionType: string, data: ResponseData | {}): ResponseActionType => ({
  type: ResponseActionTypes.API_RESPONSE_SUCCESS,
  payload: { actionType, data },
});
// common error
export const ResponseApiResponseError = (actionType: string, error: string): ResponseActionType => ({
  type: ResponseActionTypes.API_RESPONSE_ERROR,
  payload: { actionType, error },
});

export const AddResponse = (Response: Response): ResponseActionType => ({
  type: ResponseActionTypes.CREATE_RESPONSE,
  payload: Response,
});

export const DeleteResponse = (): ResponseActionType => ({
  type: ResponseActionTypes.DELETE_RESPONSE,
  payload: {},
});

export const GetAllResponses = (): ResponseActionType => ({
  type: ResponseActionTypes.Get_ALL_RESPONSE,
  payload: {},
});

export const GetResponseById = (): ResponseActionType => ({
  type: ResponseActionTypes.Get_BY_ID_RESPONSE,
  payload: {},
});

export const UpdateResponse = (): ResponseActionType => ({
  type: ResponseActionTypes.UPDATE_RESPONSE,
  payload: {},
});
