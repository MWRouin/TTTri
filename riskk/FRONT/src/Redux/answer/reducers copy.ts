// apicore
import { APICore } from '../../helpers/api/apiCore';

// constants
import {AnswerActionTypes } from './constants';

const api = new APICore();

const INIT_STATE = {
    user: api.getLoggedInUser(),
    loading: false,
};

type AnswerData = {
    payload: {
        AnswerId: number;
        AnswerText: string;
        IsCorrect: boolean;
        QuestionId: number;
    };
    type: string;
};



type AnswerActionType = {
    type:
    | AnswerActionTypes.API_RESPONSE_SUCCESS
    | AnswerActionTypes.API_RESPONSE_ERROR
    | AnswerActionTypes.Get_ALL_ANSWERS
    | AnswerActionTypes.Get_BY_ID_ANSWER
    | AnswerActionTypes.UPDATE_ANSWER
    | AnswerActionTypes.DELETE_ANSWER
    | AnswerActionTypes.CREATE_ANSWER;
    payload: {
        actionType?: string;
        data?: AnswerData | {};
        error?: string;
    };
};

type State = {
    answer?: AnswerData | {};
    loading?: boolean;
    value?: boolean;
};

const Answer = (state: State = INIT_STATE, action: AnswerActionType): any => {
    switch (action.type) {
        case AnswerActionTypes.API_RESPONSE_SUCCESS:
           
        case AnswerActionTypes.API_RESPONSE_ERROR:
            switch (action.payload.actionType) {



                case AnswerActionTypes.Get_ALL_ANSWERS: {
                    return {
                        ...state,
                        ResponseValue: null,
                        error: action.payload.error
                    };
                }
                case AnswerActionTypes.UPDATE_ANSWER: {
                    return {
                        ...state,
                        ResponseValue: null,
                        error: action.payload.error
                    };
                }
                case AnswerActionTypes.Get_BY_ID_ANSWER: {
                    return {
                        ...state,
                        ResponseValue: null,
                        error: action.payload.error
                    };
                }
                case AnswerActionTypes.DELETE_ANSWER: {
                    return {
                        ...state,
                        ResponseValue: null,
                        error: action.payload.error
                    };
                }
                case AnswerActionTypes.CREATE_ANSWER: {
                    return {
                        ...state,
                        ResponseValue: null,
                        error: action.payload.error
                    };
                }
                default:
                    return { ...state };
            }



              

            case AnswerActionTypes.CREATE_ANSWER:
                return { ...state };
            case AnswerActionTypes.DELETE_ANSWER:
                return { ...state };
            case AnswerActionTypes.UPDATE_ANSWER:
                return { ...state };
            case AnswerActionTypes.Get_BY_ID_ANSWER:
                return { ...state };
                case AnswerActionTypes.Get_ALL_ANSWERS:
                return { ...state };
        default:
            return { ...state };
    }
};

export default Answer;   
