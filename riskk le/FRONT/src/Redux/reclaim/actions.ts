import { ReclaimActionTypes } from "./constants";
import { Reclaim } from "./type";

export type ReclaimActionType = {
  type:
    | ReclaimActionTypes.API_RESPONSE_SUCCESS
    | ReclaimActionTypes.API_RESPONSE_ERROR
    | ReclaimActionTypes.Get_ALL_RECLAIM
    | ReclaimActionTypes.Get_BY_ID_RECLAIM
    | ReclaimActionTypes.UPDATE_RECLAIM
    | ReclaimActionTypes.DELETE_RECLAIM
    | ReclaimActionTypes.CREATE_RECLAIM;
  payload: {} | string;
};

type ReclaimData = {
  payload: Reclaim;
  type: string;
};


export const reclaimApiResponseSuccess = (actionType: string, data: ReclaimData | {}): ReclaimActionType => ({
  type: ReclaimActionTypes.API_RESPONSE_SUCCESS,
  payload: { actionType, data },
});
export const reclaimApiResponseError = (actionType: string, error: string): ReclaimActionType => ({
  type: ReclaimActionTypes.API_RESPONSE_ERROR,
  payload: { actionType, error },
});

export const AddClaim = (reclaim: Reclaim): ReclaimActionType => ({
  type: ReclaimActionTypes.CREATE_RECLAIM,
  payload: reclaim,
});

export const DeleteClaim = (id:number): ReclaimActionType => ({
  type: ReclaimActionTypes.DELETE_RECLAIM,
  payload: {id},
});

export const GetAllReclaims = (): ReclaimActionType => ({
  type: ReclaimActionTypes.Get_ALL_RECLAIM,
  payload: {},
});

export const GetClaimById = (): ReclaimActionType => ({
  type: ReclaimActionTypes.Get_BY_ID_RECLAIM,
  payload: {},
});

export const UpdateClaim = (reclaim: any): ReclaimActionType => ({
  type: ReclaimActionTypes.UPDATE_RECLAIM,
  payload: {reclaim},
});
