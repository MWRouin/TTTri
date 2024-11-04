import {InscriptionActionTypes} from './constants'
import { Inscription } from './type';
export type InscriptionActionType = {
  type:
    | InscriptionActionTypes.API_RESPONSE_SUCCESS
    | InscriptionActionTypes.API_RESPONSE_ERROR
    | InscriptionActionTypes.Get_ALL_INSCRIPTION
    | InscriptionActionTypes.Get_BY_ID_INSCRIPTION
    | InscriptionActionTypes.UPDATE_INSCRIPTION
    | InscriptionActionTypes.DELETE_INSCRIPTION
    | InscriptionActionTypes.CREATE_INSCRIPTION;
  payload: {} | string;
};

type InscriptionData = {
  payload: Inscription;
  type: string;
};

export const InscriptionApiResponseSuccess = (actionType: string, data: InscriptionData | {}): InscriptionActionType => ({
  type: InscriptionActionTypes.API_RESPONSE_SUCCESS,
  payload: { actionType, data },
});
export const InscriptionApiResponseError = (actionType: string, error: string): InscriptionActionType => ({
  type: InscriptionActionTypes.API_RESPONSE_ERROR,
  payload: { actionType, error },
});

export const AddInscription = (inscription: Inscription): InscriptionActionType => ({
  type: InscriptionActionTypes.CREATE_INSCRIPTION,
  payload: inscription,
});

export const DeleteInscription = (): InscriptionActionType => ({
  type: InscriptionActionTypes.DELETE_INSCRIPTION,
  payload: {},
});

export const GetAllInscriptions = (): InscriptionActionType => ({
  type: InscriptionActionTypes.Get_ALL_INSCRIPTION,
  payload: {},
});

export const GetInscriptionById = (): InscriptionActionType => ({
  type: InscriptionActionTypes.Get_BY_ID_INSCRIPTION,
  payload: {},
});

export const UpdateInscription = (): InscriptionActionType => ({
  type: InscriptionActionTypes.UPDATE_INSCRIPTION,
  payload: {},
});
