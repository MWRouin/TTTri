import { APICore } from '../../helpers/api/apiCore';
import { TestActionTypes } from './constants';

const api = new APICore();
const INIT_STATE = {
  ListTests: null,
  Test: null,
  type: '',
};

type TestData = {
  payload: {
    TestId: number;
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

type TestActionType = {
  type:
    | TestActionTypes.API_RESPONSE_SUCCESS
    | TestActionTypes.API_RESPONSE_ERROR
    | TestActionTypes.Get_ALL_TEST
    | TestActionTypes.Get_BY_ID_TEST
    | TestActionTypes.UPDATE_TEST
    | TestActionTypes.DELETE_TEST
    | TestActionTypes.CREATE_TEST;
  payload: {
    actionType?: string;
    data?: TestData | {};
    error?: string;
  };
};

interface State {
  ListTests?: TestData[];
  Test?: TestData;
  type: string;
}

const Test = (state: any = INIT_STATE, action: TestActionType): any => {
  switch (action.type) {
    case TestActionTypes.API_RESPONSE_SUCCESS:
      switch (action.payload.actionType) {
        case TestActionTypes.Get_ALL_TEST: {
          return {
            ...state,
            ListTests: action.payload.data,
          };
        }
        case TestActionTypes.UPDATE_TEST: {
          return {
            ...state,
            Test: action.payload,
          };
        }
        case TestActionTypes.Get_BY_ID_TEST: {
          return {
            ...state,
            Test: action.payload,
          };
        }
        case TestActionTypes.DELETE_TEST: {
          return {
            ...state,
            Test: action.payload,
          };
        }
        case TestActionTypes.CREATE_TEST: {
          return {
            ...state,
            Test: action.payload,
            ListTests: [],
          };
        }
        default:
          return { ...state };
      }

    case TestActionTypes.API_RESPONSE_ERROR:
      switch (action.payload.actionType) {
        case TestActionTypes.Get_ALL_TEST: {
          return {
            ...state,
            ListTests: null,
            error: action.payload.error,
          };
        }
        case TestActionTypes.UPDATE_TEST: {
          return {
            ...state,
            Test: null,
            error: action.payload.error,
          };
        }
        case TestActionTypes.Get_BY_ID_TEST: {
          return {
            ...state,
            Test: null,
            error: action.payload.error,
          };
        }
        case TestActionTypes.DELETE_TEST: {
          return {
            ...state,
            Test: null,
            error: action.payload.error,
          };
        }
        case TestActionTypes.CREATE_TEST: {
          return {
            ...state,
            Test: null,
            error: action.payload.error,
          };
        }
        default:
          return { ...state };
      }

    case TestActionTypes.CREATE_TEST:
      return { ...state };
    case TestActionTypes.DELETE_TEST:
      return { ...state };
    case TestActionTypes.UPDATE_TEST:
      return { ...state };
    case TestActionTypes.Get_BY_ID_TEST:
      return { ...state };
    case TestActionTypes.Get_ALL_TEST:
      return { ...state };
    default:
      return { ...state };
  }
};

export default Test;
