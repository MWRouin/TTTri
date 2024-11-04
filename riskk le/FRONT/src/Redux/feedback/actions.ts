import { FeedbackActionTypes } from './constants';
import { Feedback } from './type';

export type FeedbackActionType = {
    type:
    | FeedbackActionTypes.API_RESPONSE_SUCCESS
    | FeedbackActionTypes.API_RESPONSE_ERROR
    | FeedbackActionTypes.Get_ALL_FEEDBACKS
    | FeedbackActionTypes.Get_BY_ID_FEEDBACK
    | FeedbackActionTypes.UPDATE_FEEDBACK
    | FeedbackActionTypes.DELETE_FEEDBACK
    | FeedbackActionTypes.CREATE_FEEDBACK;
    payload: {} | string;
};

type FeedbackData = {
    payload: Feedback;
    type: string;
};

export const feedbackApiResponseSuccess = (actionType: string, data: FeedbackData | {}): FeedbackActionType => ({
    type: FeedbackActionTypes.API_RESPONSE_SUCCESS,
    payload: { actionType, data },
});

export const feedbackApiResponseError = (actionType: string, error: string): FeedbackActionType => ({
    type: FeedbackActionTypes.API_RESPONSE_ERROR,
    payload: { actionType, error },
});

export const AddFeedback = (feedback: Feedback): FeedbackActionType => ({
    type: FeedbackActionTypes.CREATE_FEEDBACK,
    payload: feedback,
});

export const DeleteFeedback = (feedbackId: number): FeedbackActionType => ({
    type: FeedbackActionTypes.DELETE_FEEDBACK,
    payload: { feedbackId },
});

export const UpdateFeedback = (feedback: Feedback): FeedbackActionType => ({
    type: FeedbackActionTypes.UPDATE_FEEDBACK,
    payload: feedback,
});

export const GetAllFeedbacks = (): FeedbackActionType => ({
    type: FeedbackActionTypes.Get_ALL_FEEDBACKS,
    payload:{},
});

export const GetFeedbackById = (FeedbackId: number): FeedbackActionType => ({
    type: FeedbackActionTypes.Get_BY_ID_FEEDBACK,
    payload: { FeedbackId },
});
