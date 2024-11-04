// apicore
import { APICore } from '../../helpers/api/apiCore';

// constants
import { ResponseActionTypes } from './constants';

const api = new APICore();

const INIT_STATE = {
  ListResponses: [],
  Response: null,
  type: '',
};

type ResponseData = {
  payload: {
    ResponseId: number;
    firstName: string;
    lastName: string;
    telephone: number;
    password: string;
    email: string;
    roleId: number;
    addresse: string;
  };
  type: string;
};

type ResponseActionType = {
  type:
    | ResponseActionTypes.API_RESPONSE_SUCCESS
    | ResponseActionTypes.API_RESPONSE_ERROR
    | ResponseActionTypes.Get_ALL_RESPONSE
    | ResponseActionTypes.Get_BY_ID_RESPONSE
    | ResponseActionTypes.UPDATE_RESPONSE
    | ResponseActionTypes.DELETE_RESPONSE
    | ResponseActionTypes.CREATE_RESPONSE;
  payload: {
    actionType?: string;
    data?: ResponseData | {};
    error?: string;
  };
};

interface State {
  ListResponses?: ResponseData[];
  Response?: ResponseData;
  type: string;
}

const Response = (state: any = INIT_STATE, action: ResponseActionType): any => {
  switch (action.type) {
    case ResponseActionTypes.API_RESPONSE_SUCCESS:
      switch (action.payload.actionType) {
        case ResponseActionTypes.Get_ALL_RESPONSE: {
          return {
            ...state,
            ListResponses: action.payload.data,
          };
        }
        case ResponseActionTypes.UPDATE_RESPONSE: {
          return {
            ...state,
            Response: action.payload,
          };
        }
        case ResponseActionTypes.Get_BY_ID_RESPONSE: {
          return {
            ...state,
            Response: action.payload,
          };
        }
        case ResponseActionTypes.DELETE_RESPONSE: {
          return {
            ...state,
            Response: action.payload,
          };
        }
        case ResponseActionTypes.CREATE_RESPONSE: {
          return {
            ...state,
            Response: action.payload,
            ListResponses: [],
          };
        }
        default:
          return { ...state };
      }

    case ResponseActionTypes.API_RESPONSE_ERROR:
      switch (action.payload.actionType) {
        case ResponseActionTypes.Get_ALL_RESPONSE: {
          return {
            ...state,
            ListResponses: null,
            error: action.payload.error,
          };
        }
        case ResponseActionTypes.UPDATE_RESPONSE: {
          return {
            ...state,
            Response: null,
            error: action.payload.error,
          };
        }
        case ResponseActionTypes.Get_BY_ID_RESPONSE: {
          return {
            ...state,
            Response: null,
            error: action.payload.error,
          };
        }
        case ResponseActionTypes.DELETE_RESPONSE: {
          return {
            ...state,
            Response: null,
            error: action.payload.error,
          };
        }
        case ResponseActionTypes.CREATE_RESPONSE: {
          return {
            ...state,
            Response: null,
            error: action.payload.error,
          };
        }
        default:
          return { ...state };
      }

    case ResponseActionTypes.CREATE_RESPONSE:
      return { ...state };
    case ResponseActionTypes.DELETE_RESPONSE:
      return { ...state };
    case ResponseActionTypes.UPDATE_RESPONSE:
      return { ...state };
    case ResponseActionTypes.Get_BY_ID_RESPONSE:
      return { ...state };
    case ResponseActionTypes.Get_ALL_RESPONSE:
      return { ...state };
    default:
      return { ...state };
  }
};

export default Response;
