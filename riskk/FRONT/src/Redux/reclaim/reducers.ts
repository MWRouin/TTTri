import { APICore } from '../../helpers/api/apiCore';
import { ReclaimActionTypes } from './constants';

const api = new APICore();
const INIT_STATE = {
  ListReclaims: [],
  Reclaim: null,
  type: '',
};

type ReclaimData = {
  payload: {
    reclaimID?: number;
    title: string;
    description: string;
    tag: string;
  };
  type: string;
};

type ReclaimActionType = {
  type:
    | ReclaimActionTypes.API_RESPONSE_SUCCESS
    | ReclaimActionTypes.API_RESPONSE_ERROR
    | ReclaimActionTypes.Get_ALL_RECLAIM
    | ReclaimActionTypes.Get_BY_ID_RECLAIM
    | ReclaimActionTypes.UPDATE_RECLAIM
    | ReclaimActionTypes.DELETE_RECLAIM
    | ReclaimActionTypes.CREATE_RECLAIM;
  payload: {
    actionType?: string;
    data?: ReclaimData | {};
    error?: string;
  };
};

interface State {
  ListReclaims?: ReclaimData[];
  Reclaim?: ReclaimData;
  type: string;
}

const Reclaim = (state: any = INIT_STATE, action: ReclaimActionType): any => {
  switch (action.type) {
    case ReclaimActionTypes.API_RESPONSE_SUCCESS:
      switch (action.payload.actionType) {
        case ReclaimActionTypes.Get_ALL_RECLAIM: {
          return {
            ...state,
            ListReclaims: action.payload.data,
          };
        }
        case ReclaimActionTypes.UPDATE_RECLAIM: {
          return {
            ...state,
            Reclaim: action.payload,
          };
        }
        case ReclaimActionTypes.Get_BY_ID_RECLAIM: {
          return {
            ...state,
            Reclaim: action.payload,
          };
        }
        case ReclaimActionTypes.DELETE_RECLAIM: {
          return {
            ...state,
            Reclaim: action.payload,
          };
        }
        case ReclaimActionTypes.CREATE_RECLAIM: {
          return {
            ...state,
            Reclaim: action.payload,
            ListReclaims: [],
          };
        }
        default:
          return { ...state };
      }

    case ReclaimActionTypes.API_RESPONSE_ERROR:
      switch (action.payload.actionType) {
        case ReclaimActionTypes.Get_ALL_RECLAIM: {
          return {
            ...state,
            ListReclaims: null,
            error: action.payload.error,
          };
        }
        case ReclaimActionTypes.UPDATE_RECLAIM: {
          return {
            ...state,
            Reclaim: null,
            error: action.payload.error,
          };
        }
        case ReclaimActionTypes.Get_BY_ID_RECLAIM: {
          return {
            ...state,
            Reclaim: null,
            error: action.payload.error,
          };
        }
        case ReclaimActionTypes.DELETE_RECLAIM: {
          return {
            ...state,
            Reclaim: null,
            error: action.payload.error,
          };
        }
        case ReclaimActionTypes.CREATE_RECLAIM: {
          return {
            ...state,
            Reclaim: null,
            error: action.payload.error,
          };
        }
        default:
          return { ...state };
      }

    case ReclaimActionTypes.CREATE_RECLAIM:
      return { ...state };
    case ReclaimActionTypes.DELETE_RECLAIM:
      return { ...state };
    case ReclaimActionTypes.UPDATE_RECLAIM:
      return { ...state };
    case ReclaimActionTypes.Get_BY_ID_RECLAIM:
      return { ...state };
    case ReclaimActionTypes.Get_ALL_RECLAIM:
      return { ...state };
    default:
      return { ...state };
  }
};

export default Reclaim;
