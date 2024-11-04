import { APICore } from '../../helpers/api/apiCore';
import { LevelActionTypes } from './constants';

const api = new APICore();
const INIT_STATE = {
  ListLevels: [],
  Level: null,
  type: '',
};

type LevelData = {
  payload: {
    levelId?: number;
    description: string;
  };
  type: string;
};

type LevelActionType = {
  type:
    | LevelActionTypes.API_RESPONSE_SUCCESS
    | LevelActionTypes.API_RESPONSE_ERROR
    | LevelActionTypes.Get_ALL_LEVEL
    | LevelActionTypes.Get_BY_ID_LEVEL
    | LevelActionTypes.UPDATE_LEVEL
    | LevelActionTypes.DELETE_LEVEL
    | LevelActionTypes.CREATE_LEVEL;
  payload: {
    actionType?: string;
    data?: LevelData | {};
    error?: string;
  };
};

interface State {
  ListLevels?: LevelData[];
  Level?: LevelData;
  type: string;
}

const Level = (state: any = INIT_STATE, action: LevelActionType): any => {
  switch (action.type) {
    case LevelActionTypes.API_RESPONSE_SUCCESS:
      switch (action.payload.actionType) {
        case LevelActionTypes.Get_ALL_LEVEL: {
          return {
            ...state,
            ListLevels: action.payload.data,
          };
        }
        case LevelActionTypes.UPDATE_LEVEL: {
          return {
            ...state,
            Level: action.payload,
          };
        }
        case LevelActionTypes.Get_BY_ID_LEVEL: {
          return {
            ...state,
            Level: action.payload,
          };
        }
        case LevelActionTypes.DELETE_LEVEL: {
          return {
            ...state,
            Level: action.payload,
          };
        }
        case LevelActionTypes.CREATE_LEVEL: {
          return {
            ...state,
            Level: action.payload,
            ListLevels: [],
          };
        }
        default:
          return { ...state };
      }

    case LevelActionTypes.API_RESPONSE_ERROR:
      switch (action.payload.actionType) {
        case LevelActionTypes.Get_ALL_LEVEL: {
          return {
            ...state,
            ListLevels: null,
            error: action.payload.error,
          };
        }
        case LevelActionTypes.UPDATE_LEVEL: {
          return {
            ...state,
            Level: null,
            error: action.payload.error,
          };
        }
        case LevelActionTypes.Get_BY_ID_LEVEL: {
          return {
            ...state,
            Level: null,
            error: action.payload.error,
          };
        }
        case LevelActionTypes.DELETE_LEVEL: {
          return {
            ...state,
            Level: null,
            error: action.payload.error,
          };
        }
        case LevelActionTypes.CREATE_LEVEL: {
          return {
            ...state,
            Level: null,
            error: action.payload.error,
          };
        }
        default:
          return { ...state };
      }

    case LevelActionTypes.CREATE_LEVEL:
      return { ...state };
    case LevelActionTypes.DELETE_LEVEL:
      return { ...state };
    case LevelActionTypes.UPDATE_LEVEL:
      return { ...state };
    case LevelActionTypes.Get_BY_ID_LEVEL:
      return { ...state };
    case LevelActionTypes.Get_ALL_LEVEL:
      return { ...state };
    default:
      return { ...state };
  }
};

export default Level;
