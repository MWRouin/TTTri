import { QuestionActionTypes } from './constants';
import { Question } from './type';
export type QuestionActionType = {
  type:
    | QuestionActionTypes.API_RESPONSE_SUCCESS
    | QuestionActionTypes.API_RESPONSE_ERROR
    | QuestionActionTypes.Get_ALL_QUESTION
    | QuestionActionTypes.Get_BY_ID_QUESTION
    | QuestionActionTypes.UPDATE_QUESTION
    | QuestionActionTypes.DELETE_QUESTION
    | QuestionActionTypes.CREATE_QUESTION;
  payload: {} | string;
};

type QuestionData = {
  payload: Question;
  type: string;
};

// common success
export const QuestionApiResponseSuccess = (actionType: string, data: QuestionData | {}): QuestionActionType => ({
  type: QuestionActionTypes.API_RESPONSE_SUCCESS,
  payload: { actionType, data },
});
// common error
export const QuestionApiResponseError = (actionType: string, error: string): QuestionActionType => ({
  type: QuestionActionTypes.API_RESPONSE_ERROR,
  payload: { actionType, error },
});

export const AddQuestion = (Question: Question): QuestionActionType => ({
  type: QuestionActionTypes.CREATE_QUESTION,
  payload: Question,
});

export const DeleteQuestion = (): QuestionActionType => ({
  type: QuestionActionTypes.DELETE_QUESTION,
  payload: {},
});

export const GetAllQuestions = (): QuestionActionType => ({
  type: QuestionActionTypes.Get_ALL_QUESTION,
  payload: {},
});

export const GetQuestionById = (): QuestionActionType => ({
  type: QuestionActionTypes.Get_BY_ID_QUESTION,
  payload: {},
});

export const UpdateQuestion = (): QuestionActionType => ({
  type: QuestionActionTypes.UPDATE_QUESTION,
  payload: {},
});
