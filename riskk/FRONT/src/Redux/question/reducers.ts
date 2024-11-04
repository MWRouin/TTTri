import { APICore } from '../../helpers/api/apiCore';
import { QuestionActionTypes } from './constants';

const api = new APICore();
const INIT_STATE = {
  ListQuestions: null,
  Question: null,
  type: '',
};

type QuestionData = {
  payload: {
    questionId?: number;
    labelle: string;
    description: string;
    testId?: number;  
  };
  type: string;
};

type QuestionActionType = {
  type:
    | QuestionActionTypes.API_RESPONSE_SUCCESS
    | QuestionActionTypes.API_RESPONSE_ERROR
    | QuestionActionTypes.Get_ALL_QUESTION
    | QuestionActionTypes.Get_BY_ID_QUESTION
    | QuestionActionTypes.UPDATE_QUESTION
    | QuestionActionTypes.DELETE_QUESTION
    | QuestionActionTypes.CREATE_QUESTION;
  payload: {
    actionType?: string;
    data?: QuestionData | {};
    error?: string;
  };
};

interface State {
  ListQuestions?: QuestionData[];
  Question?: QuestionData;
  type: string;
}

const Question = (state: any = INIT_STATE, action: QuestionActionType): any => {
  switch (action.type) {
    case QuestionActionTypes.API_RESPONSE_SUCCESS:
      switch (action.payload.actionType) {
        case QuestionActionTypes.Get_ALL_QUESTION: {
          return {
            ...state,
            ListQuestions: action.payload.data,
          };
        }
        case QuestionActionTypes.UPDATE_QUESTION: {
          return {
            ...state,
            Question: action.payload,
          };
        }
        case QuestionActionTypes.Get_BY_ID_QUESTION: {
          return {
            ...state,
            Question: action.payload,
          };
        }
        case QuestionActionTypes.DELETE_QUESTION: {
          return {
            ...state,
            Question: action.payload,
          };
        }
        case QuestionActionTypes.CREATE_QUESTION: {
          return {
            ...state,
            Question: action.payload,
            ListQuestions: [],
          };
        }
        default:
          return { ...state };
      }

    case QuestionActionTypes.API_RESPONSE_ERROR:
      switch (action.payload.actionType) {
        case QuestionActionTypes.Get_ALL_QUESTION: {
          return {
            ...state,
            ListQuestions: null,
            error: action.payload.error,
          };
        }
        case QuestionActionTypes.UPDATE_QUESTION: {
          return {
            ...state,
            Question: null,
            error: action.payload.error,
          };
        }
        case QuestionActionTypes.Get_BY_ID_QUESTION: {
          return {
            ...state,
            Question: null,
            error: action.payload.error,
          };
        }
        case QuestionActionTypes.DELETE_QUESTION: {
          return {
            ...state,
            Question: null,
            error: action.payload.error,
          };
        }
        case QuestionActionTypes.CREATE_QUESTION: {
          return {
            ...state,
            Question: null,
            error: action.payload.error,
          };
        }
        default:
          return { ...state };
      }

    case QuestionActionTypes.CREATE_QUESTION:
      return { ...state };
    case QuestionActionTypes.DELETE_QUESTION:
      return { ...state };
    case QuestionActionTypes.UPDATE_QUESTION:
      return { ...state };
    case QuestionActionTypes.Get_BY_ID_QUESTION:
      return { ...state };
    case QuestionActionTypes.Get_ALL_QUESTION:
      return { ...state };
    default:
      return { ...state };
  }
};

export default Question;
