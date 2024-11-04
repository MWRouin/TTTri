import { SessionActionTypes } from './constants';
import { Session } from './type';

export type SessionActionType = {
    type:
    | SessionActionTypes.API_RESPONSE_SUCCESS
    | SessionActionTypes.API_RESPONSE_ERROR
    | SessionActionTypes.GET_ALL_SESSIONS
    | SessionActionTypes.GET_BY_ID_SESSION
    | SessionActionTypes.UPDATE_SESSION
    | SessionActionTypes.DELETE_SESSION
    | SessionActionTypes.UPLOAD_SESSION_FILE
    | SessionActionTypes.CREATE_SESSION;
    payload: {} | string;
};

type SessionData = {
    payload: Session;
    type: string;
};

export const sessionApiResponseSuccess = (actionType: string, data: SessionData | {}): SessionActionType => ({
    type: SessionActionTypes.API_RESPONSE_SUCCESS,
    payload: { actionType, data },
});

export const sessionApiResponseError = (actionType: string, error: string): SessionActionType => ({
    type: SessionActionTypes.API_RESPONSE_ERROR,
    payload: { actionType, error },
});

export const addSession = (session: Session): SessionActionType => ({
    type: SessionActionTypes.CREATE_SESSION,
    payload: session,
});

export const deleteSession = (SessionId: number): SessionActionType => ({
    type: SessionActionTypes.DELETE_SESSION,
    payload: { SessionId },
});

export const updateSession = (session: Session): SessionActionType => ({
    type: SessionActionTypes.UPDATE_SESSION,
    payload: session,
});

export const getAllSessions = (): SessionActionType => ({
    type: SessionActionTypes.GET_ALL_SESSIONS,
    payload: {},
});

export const getSessionById = (SessionId: number): SessionActionType => ({
    type: SessionActionTypes.GET_BY_ID_SESSION,
    payload: { SessionId },
});
export const uploadSessionFile = (formData: FormData): SessionActionType => ({
    type: SessionActionTypes.UPLOAD_SESSION_FILE,
    payload: formData,
});

