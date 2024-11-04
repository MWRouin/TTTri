import { ParticipationActionTypes } from './constants';
import { Participation } from './type';

// Define the ParticipationActionType
export type ParticipationActionType = {
    type:
        | ParticipationActionTypes.API_RESPONSE_SUCCESS
        | ParticipationActionTypes.API_RESPONSE_ERROR
        | ParticipationActionTypes.Get_ALL_PARTICIPATIONS
        | ParticipationActionTypes.Get_BY_COURSE_ID_PARTICIPATION
        | ParticipationActionTypes.Get_BY_USER_ID_PARTICIPATION
        | ParticipationActionTypes.UPDATE_PARTICIPATION
        | ParticipationActionTypes.DELETE_PARTICIPATION
        | ParticipationActionTypes.CREATE_PARTICIPATION;
    payload: {} | string | any;
};

// Define ParticipationData type
type ParticipationData = {
    payload: {
        userId: number;
        courseId: number;
    };
    type: string;
};

// Action creators for API response success and error
export const ParticipationApiResponseSuccess = (actionType: string, data: ParticipationData | {}): ParticipationActionType => ({
    type: ParticipationActionTypes.API_RESPONSE_SUCCESS,
    payload: { actionType, data },
});

export const ParticipationApiResponseError = (actionType: string, error: string): ParticipationActionType => ({
    type: ParticipationActionTypes.API_RESPONSE_ERROR,
    payload: { actionType, error },
});

// Action creator for adding a participation
export const AddParticipation = ( participation: Participation ): ParticipationActionType => ({
    type: ParticipationActionTypes.CREATE_PARTICIPATION,
    payload: participation,
});

// Action creator for deleting a participation by userId and courseId
export const DeleteParticipation = (Participation:number): ParticipationActionType => ({
    type: ParticipationActionTypes.DELETE_PARTICIPATION,
    payload: { Participation},
});

// Action creator for fetching all participations
export const GetAllParticipations = (): ParticipationActionType => ({
    type: ParticipationActionTypes.Get_ALL_PARTICIPATIONS,
    payload: {},
});

// Action creator for fetching a participation by userId and courseId
export const GetParticipationByCourseId = (courseId:number): ParticipationActionType => ({
    type: ParticipationActionTypes.Get_BY_COURSE_ID_PARTICIPATION,
    payload: {courseId},
});


export const GetParticipationByUserId = (UserId:number): ParticipationActionType => ({
    type: ParticipationActionTypes.Get_BY_USER_ID_PARTICIPATION,
    payload: {UserId},
});

// Action creator for updating a participation
export const UpdateParticipation = (payload: { participation: Participation }): ParticipationActionType => ({
    type: ParticipationActionTypes.UPDATE_PARTICIPATION,
    payload: payload,
});
