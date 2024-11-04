import { AnswerActionTypes } from './constants';
import { Answer } from './type';


export type AnswerActionType = {
    type:
    | AnswerActionTypes.API_RESPONSE_SUCCESS
    | AnswerActionTypes.API_RESPONSE_ERROR
    | AnswerActionTypes.Get_ALL_ANSWERS
    | AnswerActionTypes.Get_BY_ID_ANSWER
    | AnswerActionTypes.UPDATE_ANSWER
    | AnswerActionTypes.DELETE_ANSWER
    | AnswerActionTypes.CREATE_ANSWER;
    payload: {} | string;
};


type AnswerData = {
    payload: Answer;
    type: string;
  };
export const answerApiResponseSuccess = (actionType: string, data: AnswerData | {}): AnswerActionType => ({
    type: AnswerActionTypes.API_RESPONSE_SUCCESS,
    payload: { actionType, data },
});

export const answerApiResponseError = (actionType: string, error: string): AnswerActionType => ({
    type: AnswerActionTypes.API_RESPONSE_ERROR,
    payload: { actionType, error },
});


export const AddAnswer = (FirstName: string, LastName: string, Number: number, Cin: number, Email: string, Pwd: string): AnswerActionType => ({
    type: AnswerActionTypes.CREATE_ANSWER,
    payload: { FirstName, LastName, Number, Cin, Email, Pwd },
});

export const DeleteAnswer = (): AnswerActionType => ({
    type: AnswerActionTypes.DELETE_ANSWER,
    payload: {},
});

export const GetAllAnswers = (): AnswerActionType => ({
    type: AnswerActionTypes.Get_ALL_ANSWERS,
    payload: {},
});

export const GetAnswerById = (): AnswerActionType => ({
    type: AnswerActionTypes.Get_BY_ID_ANSWER,
    payload: {},
});

export const UpdateAnswer = (): AnswerActionType => ({
    type: AnswerActionTypes.UPDATE_ANSWER,
    payload: {},
});


