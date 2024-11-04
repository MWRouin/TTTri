import { APICore } from '../../helpers/api/apiCore';
import { ResponsedetailsActionTypes } from './constants';

const api = new APICore();
const INIT_STATE = {
  ListResponsedetailss: null,
  Responsedetails: null,
  type: '',
};

type ResponsedetailsData = {
  payload: {
    responseDetailsId?: number;
    description: string;
    responseId?: string;
    answerId?: string;
  };
  type: string;
};

type ResponsedetailsActionType = {
  type:
    | ResponsedetailsActionTypes.API_RESPONSE_SUCCESS
    | ResponsedetailsActionTypes.API_RESPONSE_ERROR
    | ResponsedetailsActionTypes.Get_ALL_REPONSEDETAILS
    | ResponsedetailsActionTypes.Get_BY_ID_REPONSEDETAILS
    | ResponsedetailsActionTypes.UPDATE_REPONSEDETAILS
    | ResponsedetailsActionTypes.DELETE_REPONSEDETAILS
    | ResponsedetailsActionTypes.CREATE_REPONSEDETAILS;
  payload: {
    actionType?: string;
    data?: ResponsedetailsData | {};
    error?: string;
  };
};

interface State {
  ListResponsedetailss?: ResponsedetailsData[];
  Responsedetails?: ResponsedetailsData;
  type: string;
}

const Responsedetails = (state: any = INIT_STATE, action: ResponsedetailsActionType): any => {
  switch (action.type) {
    case ResponsedetailsActionTypes.API_RESPONSE_SUCCESS:
      switch (action.payload.actionType) {
        case ResponsedetailsActionTypes.Get_ALL_REPONSEDETAILS: {
          return {
            ...state,
            ListResponsedetailss: action.payload.data,
          };
        }
        case ResponsedetailsActionTypes.UPDATE_REPONSEDETAILS: {
          return {
            ...state,
            Responsedetails: action.payload,
          };
        }
        case ResponsedetailsActionTypes.Get_BY_ID_REPONSEDETAILS: {
          return {
            ...state,
            Responsedetails: action.payload,
          };
        }
        case ResponsedetailsActionTypes.DELETE_REPONSEDETAILS: {
          return {
            ...state,
            Responsedetails: action.payload,
          };
        }
        case ResponsedetailsActionTypes.CREATE_REPONSEDETAILS: {
          return {
            ...state,
            Responsedetails: action.payload,
            ListResponsedetailss: [],
          };
        }
        default:
          return { ...state };
      }

    case ResponsedetailsActionTypes.API_RESPONSE_ERROR:
      switch (action.payload.actionType) {
        case ResponsedetailsActionTypes.Get_ALL_REPONSEDETAILS: {
          return {
            ...state,
            ListResponsedetailss: null,
            error: action.payload.error,
          };
        }
        case ResponsedetailsActionTypes.UPDATE_REPONSEDETAILS: {
          return {
            ...state,
            Responsedetails: null,
            error: action.payload.error,
          };
        }
        case ResponsedetailsActionTypes.Get_BY_ID_REPONSEDETAILS: {
          return {
            ...state,
            Responsedetails: null,
            error: action.payload.error,
          };
        }
        case ResponsedetailsActionTypes.DELETE_REPONSEDETAILS: {
          return {
            ...state,
            Responsedetails: null,
            error: action.payload.error,
          };
        }
        case ResponsedetailsActionTypes.CREATE_REPONSEDETAILS: {
          return {
            ...state,
            Responsedetails: null,
            error: action.payload.error,
          };
        }
        default:
          return { ...state };
      }

    case ResponsedetailsActionTypes.CREATE_REPONSEDETAILS:
      return { ...state };
    case ResponsedetailsActionTypes.DELETE_REPONSEDETAILS:
      return { ...state };
    case ResponsedetailsActionTypes.UPDATE_REPONSEDETAILS:
      return { ...state };
    case ResponsedetailsActionTypes.Get_BY_ID_REPONSEDETAILS:
      return { ...state };
    case ResponsedetailsActionTypes.Get_ALL_REPONSEDETAILS:
      return { ...state };
    default:
      return { ...state };
  }
};

export default Responsedetails;
