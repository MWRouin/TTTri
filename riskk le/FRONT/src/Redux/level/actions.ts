import { LevelActionTypes } from './constants';
import { Level } from './type';
export type LevelActionType = {
  type:
    | LevelActionTypes.API_RESPONSE_SUCCESS
    | LevelActionTypes.API_RESPONSE_ERROR
    | LevelActionTypes.Get_ALL_LEVEL
    | LevelActionTypes.Get_BY_ID_LEVEL
    | LevelActionTypes.UPDATE_LEVEL
    | LevelActionTypes.DELETE_LEVEL
    | LevelActionTypes.CREATE_LEVEL;
  payload: {} | string;
};

type LevelData = {
  payload: Level;
  type: string;
};


export const LevelApiResponseSuccess = (actionType: string, data: LevelData | {}): LevelActionType => ({
  type: LevelActionTypes.API_RESPONSE_SUCCESS,
  payload: { actionType, data },
});
export const LevelApiResponseError = (actionType: string, error: string): LevelActionType => ({
  type: LevelActionTypes.API_RESPONSE_ERROR,
  payload: { actionType, error },
});

export const AddLevel = (level: Level): LevelActionType => ({
  type: LevelActionTypes.CREATE_LEVEL,
  payload: level,
});

export const DeleteLevel = (id:number): LevelActionType => ({
  type: LevelActionTypes.DELETE_LEVEL,
  payload: {id},
});

export const GetAllLevels = (): LevelActionType => ({
  type: LevelActionTypes.Get_ALL_LEVEL,
  payload: {},
});

export const GetLevelById = (): LevelActionType => ({
  type: LevelActionTypes.Get_BY_ID_LEVEL,
  payload: {},
});

export const UpdateLevel = (level: any): LevelActionType => ({
  type: LevelActionTypes.UPDATE_LEVEL,
  payload: {level},
});
