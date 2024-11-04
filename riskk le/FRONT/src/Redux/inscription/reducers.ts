import { APICore } from '../../helpers/api/apiCore';
import { InscriptionActionTypes } from './constants';

const api = new APICore();
const INIT_STATE = {
  ListInscriptions: null,
  Inscription: null,
  type: '',
};

type InscriptionData = {
  payload: {
    InscriptionId?: number;
    Name: string;
    Prix: number;
    CourseId?: number;
    UserId?: number;
  };
  type: string;
};

type InscriptionActionType = {
  type:
    | InscriptionActionTypes.API_RESPONSE_SUCCESS
    | InscriptionActionTypes.API_RESPONSE_ERROR
    | InscriptionActionTypes.Get_ALL_INSCRIPTION
    | InscriptionActionTypes.Get_BY_ID_INSCRIPTION
    | InscriptionActionTypes.UPDATE_INSCRIPTION
    | InscriptionActionTypes.DELETE_INSCRIPTION
    | InscriptionActionTypes.CREATE_INSCRIPTION;
  payload: {
    actionType?: string;
    data?: InscriptionData | {};
    error?: string;
  };
};

interface State {
  ListInscriptions?: InscriptionData[];
  Inscription?: InscriptionData;
  type: string;
}

const Inscription = (state: any = INIT_STATE, action: InscriptionActionType): any => {
  switch (action.type) {
    case InscriptionActionTypes.API_RESPONSE_SUCCESS:
      switch (action.payload.actionType) {
        case InscriptionActionTypes.Get_ALL_INSCRIPTION: {
          return {
            ...state,
            ListInscriptions: action.payload.data,
          };
        }
        case InscriptionActionTypes.UPDATE_INSCRIPTION: {
          return {
            ...state,
            Inscription: action.payload,
          };
        }
        case InscriptionActionTypes.Get_BY_ID_INSCRIPTION: {
          return {
            ...state,
            Inscription: action.payload,
          };
        }
        case InscriptionActionTypes.DELETE_INSCRIPTION: {
          return {
            ...state,
            Inscription: action.payload,
          };
        }
        case InscriptionActionTypes.CREATE_INSCRIPTION: {
          return {
            ...state,
            Inscription: action.payload,
            ListInscriptions: [],
          };
        }
        default:
          return { ...state };
      }

    case InscriptionActionTypes.API_RESPONSE_ERROR:
      switch (action.payload.actionType) {
        case InscriptionActionTypes.Get_ALL_INSCRIPTION: {
          return {
            ...state,
            ListInscriptions: null,
            error: action.payload.error,
          };
        }
        case InscriptionActionTypes.UPDATE_INSCRIPTION: {
          return {
            ...state,
            Inscription: null,
            error: action.payload.error,
          };
        }
        case InscriptionActionTypes.Get_BY_ID_INSCRIPTION: {
          return {
            ...state,
            Inscription: null,
            error: action.payload.error,
          };
        }
        case InscriptionActionTypes.DELETE_INSCRIPTION: {
          return {
            ...state,
            Inscription: null,
            error: action.payload.error,
          };
        }
        case InscriptionActionTypes.CREATE_INSCRIPTION: {
          return {
            ...state,
            Inscription: null,
            error: action.payload.error,
          };
        }
        default:
          return { ...state };
      }

    case InscriptionActionTypes.CREATE_INSCRIPTION:
      return { ...state };
    case InscriptionActionTypes.DELETE_INSCRIPTION:
      return { ...state };
    case InscriptionActionTypes.UPDATE_INSCRIPTION:
      return { ...state };
    case InscriptionActionTypes.Get_BY_ID_INSCRIPTION:
      return { ...state };
    case InscriptionActionTypes.Get_ALL_INSCRIPTION:
      return { ...state };
    default:
      return { ...state };
  }
};

export default Inscription;
