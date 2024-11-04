import { APICore } from '../../helpers/api/apiCore';
import {FeedbackActionTypes } from './constants';
const api = new APICore();
const INIT_STATE = {
    ListFeedbacks: [],
    Feedback: null,
    type: '',
  };

type FeedbackData = {
    payload: {
        feedbackId: number;
        feedbackText: string;
        rating: number;
        userId: number;
        courseId: number;
        date :string ;

    };
    type: string;
};

type FeedbackActionType = {
    type:
    | FeedbackActionTypes.API_RESPONSE_SUCCESS
    | FeedbackActionTypes.API_RESPONSE_ERROR
    | FeedbackActionTypes.Get_ALL_FEEDBACKS
    | FeedbackActionTypes.Get_BY_ID_FEEDBACK
    | FeedbackActionTypes.UPDATE_FEEDBACK
    | FeedbackActionTypes.DELETE_FEEDBACK
    | FeedbackActionTypes.CREATE_FEEDBACK;
    payload: {
        actionType?: string;
        data?: FeedbackData | {};
        error?: string;
    };
};
interface State {
    ListFeedbacks?: FeedbackData[];
    Feedback?: FeedbackData;
    type: string;
  }
  
  const Feedback = (state: any = INIT_STATE, action: FeedbackActionType): any => {
    switch (action.type) {
      case FeedbackActionTypes.API_RESPONSE_SUCCESS:
        switch (action.payload.actionType) {
          case FeedbackActionTypes.Get_ALL_FEEDBACKS: {
            return {
                ...state,
              ListFeedbacks: action.payload.data,
            };
          }
          case FeedbackActionTypes.UPDATE_FEEDBACK: {
            return {
                ...state,
                Feedback: action.payload.data,
            };
          }
          case FeedbackActionTypes.Get_BY_ID_FEEDBACK: {
            return {
                ...state,
              Feedback: action.payload.data,
            };
          }
          case FeedbackActionTypes.DELETE_FEEDBACK: {
            return {
                ...state,
                Feedback: action.payload,
            };
          }
          case FeedbackActionTypes.CREATE_FEEDBACK: {
            return {
                ...state,
                Feedback: action.payload.data,
              ListFeedbacks: [],
            };
          }
          default:
            return { ...state };
        }
           
        case FeedbackActionTypes.API_RESPONSE_ERROR:
            switch (action.payload.actionType) {



                case FeedbackActionTypes.Get_ALL_FEEDBACKS: {
                    return {
                        ...state,
                        ResponseValue: null,
                        error: action.payload.error
                    };
                }
                case FeedbackActionTypes.UPDATE_FEEDBACK: {
                    return {
                        ...state,
                        ResponseValue: null,
                        error: action.payload.error
                    };
                }
                case FeedbackActionTypes.Get_BY_ID_FEEDBACK: {
                    return {
                        ...state,
                        ResponseValue: null,
                        error: action.payload.error
                    };
                }
                case FeedbackActionTypes.DELETE_FEEDBACK: {
                    return {
                        ...state,
                        ResponseValue: null,
                        error: action.payload.error
                    };
                }
                case FeedbackActionTypes.CREATE_FEEDBACK: {
                    return {
                        ...state,
                        ResponseValue: null,
                        error: action.payload.error
                    };
                }
                default:
                    return { ...state };
            }



              

            case FeedbackActionTypes.CREATE_FEEDBACK:
                return { ...state };
            case FeedbackActionTypes.DELETE_FEEDBACK:
                return { ...state };
            case FeedbackActionTypes.UPDATE_FEEDBACK:
                return { ...state };
            case FeedbackActionTypes.Get_BY_ID_FEEDBACK:
                return { ...state };
            case FeedbackActionTypes.Get_ALL_FEEDBACKS:
                return { ...state };
        default:
            return { ...state };
    }
};

export default Feedback;   
