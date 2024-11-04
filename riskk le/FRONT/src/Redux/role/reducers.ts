import { APICore } from '../../helpers/api/apiCore';
import { RoleActionTypes } from './constants';

const api = new APICore();
const INIT_STATE = {
  ListRoles: [],
  Role: null,
  type: '',
};

type RoleData = {
  payload: {
    roleId: number;
    description: string;
 
  };
  type: string;
};

type RoleActionType = {
  type:
    | RoleActionTypes.API_RESPONSE_SUCCESS
    | RoleActionTypes.API_RESPONSE_ERROR
    | RoleActionTypes.Get_ALL_ROLE
    | RoleActionTypes.Get_BY_ID_ROLE
    | RoleActionTypes.UPDATE_ROLE
    | RoleActionTypes.DELETE_ROLE
    | RoleActionTypes.CREATE_ROLE;
  payload: {
    actionType?: string;
    data?: RoleData | {};
    error?: string;
  };
};

interface State {
  ListRoles?: RoleData[];
  Role?: RoleData;
  type: string;
}

const Role = (state: any = INIT_STATE, action: RoleActionType): any => {
  switch (action.type) {
    case RoleActionTypes.API_RESPONSE_SUCCESS:
      switch (action.payload.actionType) {
        case RoleActionTypes.Get_ALL_ROLE: {
          return {
            ...state,
            ListRoles: action.payload.data,
          };
        }
        case RoleActionTypes.UPDATE_ROLE: {
          return {
            ...state,
            Role: action.payload,
          };
        }
        case RoleActionTypes.Get_BY_ID_ROLE: {
          return {
            ...state,
            Role: action.payload,
          };
        }
        case RoleActionTypes.DELETE_ROLE: {
          return {
            ...state,
            Role: action.payload,
          };
        }
        case RoleActionTypes.CREATE_ROLE: {
          return {
            ...state,
            Role: action.payload,
            ListRoles: [],
          };
        }
        default:
          return { ...state };
      }

    case RoleActionTypes.API_RESPONSE_ERROR:
      switch (action.payload.actionType) {
        case RoleActionTypes.Get_ALL_ROLE: {
          return {
            ...state,
            ListRoles: null,
            error: action.payload.error,
          };
        }
        case RoleActionTypes.UPDATE_ROLE: {
          return {
            ...state,
            Role: null,
            error: action.payload.error,
          };
        }
        case RoleActionTypes.Get_BY_ID_ROLE: {
          return {
            ...state,
            Role: null,
            error: action.payload.error,
          };
        }
        case RoleActionTypes.DELETE_ROLE: {
          return {
            ...state,
            Role: null,
            error: action.payload.error,
          };
        }
        case RoleActionTypes.CREATE_ROLE: {
          return {
            ...state,
            Role: null,
            error: action.payload.error,
          };
        }
        default:
          return { ...state };
      }

    case RoleActionTypes.CREATE_ROLE:
      return { ...state };
    case RoleActionTypes.DELETE_ROLE:
      return { ...state };
    case RoleActionTypes.UPDATE_ROLE:
      return { ...state };
    case RoleActionTypes.Get_BY_ID_ROLE:
      return { ...state };
    case RoleActionTypes.Get_ALL_ROLE:
      return { ...state };
    default:
      return { ...state };
  }
};

export default Role;
