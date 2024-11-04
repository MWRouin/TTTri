import { APICore } from '../../helpers/api/apiCore';
import { UserActionTypes } from './constants';

const api = new APICore();
const INIT_STATE = {
  ListUsers: [],
  User: null,
  type: '',
};

type UserData = {
  payload: {
    userId: number;
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

type UserActionType = {
  type:
    | UserActionTypes.API_RESPONSE_SUCCESS
    | UserActionTypes.API_RESPONSE_ERROR
    | UserActionTypes.Get_ALL_USER
    | UserActionTypes.Get_BY_ID_USER
    | UserActionTypes.UPDATE_USER
    | UserActionTypes.DELETE_USER
    | UserActionTypes.CREATE_USER;
  payload: {
    actionType?: string;
    data?: UserData | {};
    error?: string;
  };
};

interface State {
  ListUsers?: UserData[];
  User?: UserData;
  type: string;
}

const User = (state: any = INIT_STATE, action: UserActionType): any => {
  switch (action.type) {
    case UserActionTypes.API_RESPONSE_SUCCESS:
      switch (action.payload.actionType) {
        case UserActionTypes.Get_ALL_USER: {
          return {
            ...state,
            ListUsers: action.payload.data,
          };
        }
        case UserActionTypes.UPDATE_USER: {
          return {
            ...state,
            User: action.payload,
          };
        }
        case UserActionTypes.Get_BY_ID_USER: {
          return {
            ...state,
            User: action.payload,
          };
        }
        case UserActionTypes.DELETE_USER: {
          return {
            ...state,
            User: action.payload,
          };
        }
        case UserActionTypes.CREATE_USER: {
          return {
            ...state,
            User: action.payload,
            ListUsers: [],
          };
        }
        default:
          return { ...state };
      }

    case UserActionTypes.API_RESPONSE_ERROR:
      switch (action.payload.actionType) {
        case UserActionTypes.Get_ALL_USER: {
          return {
            ...state,
            ListUsers: null,
            error: action.payload.error,
          };
        }
        case UserActionTypes.UPDATE_USER: {
          return {
            ...state,
            User: null,
            error: action.payload.error,
          };
        }
        case UserActionTypes.Get_BY_ID_USER: {
          return {
            ...state,
            User: null,
            error: action.payload.error,
          };
        }
        case UserActionTypes.DELETE_USER: {
          return {
            ...state,
            User: null,
            error: action.payload.error,
          };
        }
        case UserActionTypes.CREATE_USER: {
          return {
            ...state,
            User: null,
            error: action.payload.error,
          };
        }
        default:
          return { ...state };
      }

    case UserActionTypes.CREATE_USER:
      return { ...state };
    case UserActionTypes.DELETE_USER:
      return { ...state };
    case UserActionTypes.UPDATE_USER:
      return { ...state };
    case UserActionTypes.Get_BY_ID_USER:
      return { ...state };
    case UserActionTypes.Get_ALL_USER:
      return { ...state };
    default:
      return { ...state };
  }
};

export default User;
