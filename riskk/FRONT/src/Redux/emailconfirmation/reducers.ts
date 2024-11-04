import { APICore } from '../../helpers/api/apiCore';
import { ConformationActionTypes } from './constants';

const api = new APICore();
const INIT_STATE = {
  ListConformations: null,
  Conformation: null,
  type: '',
};

type ConformationData = {
  payload: {
    confirmationId?: number;
    confirmationToken: string;
    sentDate: Date;
    isConfirmed: boolean;
    userId?: number;
    paymentId?: number;
  };
  type: string;
};

type ConformationActionType = {
  type:
    | ConformationActionTypes.API_RESPONSE_SUCCESS
    | ConformationActionTypes.API_RESPONSE_ERROR
    | ConformationActionTypes.Get_ALL_CONFIRMATION
    | ConformationActionTypes.Get_BY_ID_CONFIRMATION
    | ConformationActionTypes.UPDATE_CONFIRMATION
    | ConformationActionTypes.DELETE_CONFIRMATION
    | ConformationActionTypes.CREATE_CONFIRMATION;
  payload: {
    actionType?: string;
    data?: ConformationData | {};
    error?: string;
  };
};

interface State {
  ListConformations?: ConformationData[];
  Conformation?: ConformationData;
  type: string;
}

const Conformation = (state: any = INIT_STATE, action: ConformationActionType): any => {
  switch (action.type) {
    case ConformationActionTypes.API_RESPONSE_SUCCESS:
      switch (action.payload.actionType) {
        case ConformationActionTypes.Get_ALL_CONFIRMATION: {
          return {
            ...state,
            ListConformations: action.payload.data,
          };
        }
        case ConformationActionTypes.UPDATE_CONFIRMATION: {
          return {
            ...state,
            Conformation: action.payload,
          };
        }
        case ConformationActionTypes.Get_BY_ID_CONFIRMATION: {
          return {
            ...state,
            Conformation: action.payload,
          };
        }
        case ConformationActionTypes.DELETE_CONFIRMATION: {
          return {
            ...state,
            Conformation: action.payload,
          };
        }
        case ConformationActionTypes.CREATE_CONFIRMATION: {
          return {
            ...state,
            Conformation: action.payload,
            ListConformations: [],
          };
        }
        default:
          return { ...state };
      }

    case ConformationActionTypes.API_RESPONSE_ERROR:
      switch (action.payload.actionType) {
        case ConformationActionTypes.Get_ALL_CONFIRMATION: {
          return {
            ...state,
            ListConformations: null,
            error: action.payload.error,
          };
        }
        case ConformationActionTypes.UPDATE_CONFIRMATION: {
          return {
            ...state,
            Conformation: null,
            error: action.payload.error,
          };
        }
        case ConformationActionTypes.Get_BY_ID_CONFIRMATION: {
          return {
            ...state,
            Conformation: null,
            error: action.payload.error,
          };
        }
        case ConformationActionTypes.DELETE_CONFIRMATION: {
          return {
            ...state,
            Conformation: null,
            error: action.payload.error,
          };
        }
        case ConformationActionTypes.CREATE_CONFIRMATION: {
          return {
            ...state,
            Conformation: null,
            error: action.payload.error,
          };
        }
        default:
          return { ...state };
      }

    case ConformationActionTypes.CREATE_CONFIRMATION:
      return { ...state };
    case ConformationActionTypes.DELETE_CONFIRMATION:
      return { ...state };
    case ConformationActionTypes.UPDATE_CONFIRMATION:
      return { ...state };
    case ConformationActionTypes.Get_BY_ID_CONFIRMATION:
      return { ...state };
    case ConformationActionTypes.Get_ALL_CONFIRMATION:
      return { ...state };
    default:
      return { ...state };
  }
};

export default Conformation;
