import { APICore } from '../../helpers/api/apiCore';
import { SessionActionTypes } from './constants';

const api = new APICore();

const INIT_STATE = {
    ListSessions: [],
    Session: null,
    type: '',
    uploadResponse: null, // Add this line to store the upload response
    error: null,
};

type SessionData = {
    payload: {
        SessionId: number;
        Type: string;
        Url: string;
        Title: string;
        IsActive: boolean;
        SectionId: number;
    };
    type: string;
};

type SessionActionType = {
    type:
    | SessionActionTypes.API_RESPONSE_SUCCESS
    | SessionActionTypes.API_RESPONSE_ERROR
    | SessionActionTypes.GET_ALL_SESSIONS
    | SessionActionTypes.GET_BY_ID_SESSION
    | SessionActionTypes.UPDATE_SESSION
    | SessionActionTypes.DELETE_SESSION
    | SessionActionTypes.CREATE_SESSION
    | SessionActionTypes.UPLOAD_SESSION_FILE; // Add this line
    payload: {
        actionType?: string;
        data?: SessionData | {};
        error?: string;
    };
};

const Session = (state: any = INIT_STATE, action: SessionActionType): any => {
    switch (action.type) {
        case SessionActionTypes.API_RESPONSE_SUCCESS:
            switch (action.payload.actionType) {
                case SessionActionTypes.GET_ALL_SESSIONS:
                    return {
                        ...state,
                        ListSessions: action.payload.data,
                    };
                case SessionActionTypes.UPDATE_SESSION:
                case SessionActionTypes.GET_BY_ID_SESSION:
                case SessionActionTypes.CREATE_SESSION:
                    return {
                        ...state,
                        Session: action.payload.data,
                    };
                case SessionActionTypes.DELETE_SESSION:
                    return {
                        ...state,
                        Session: action.payload.data,
                    };
                case SessionActionTypes.UPLOAD_SESSION_FILE: // Add this case
                    return {
                        ...state,
                        uploadResponse: action.payload.data,
                    };
                default:
                    return { ...state };
            }
        case SessionActionTypes.API_RESPONSE_ERROR:
            switch (action.payload.actionType) {
                case SessionActionTypes.GET_ALL_SESSIONS:
                case SessionActionTypes.UPDATE_SESSION:
                case SessionActionTypes.GET_BY_ID_SESSION:
                case SessionActionTypes.DELETE_SESSION:
                case SessionActionTypes.CREATE_SESSION:
                    return {
                        ...state,
                        ResponseValue: null,
                        error: action.payload.error,
                    };
                case SessionActionTypes.UPLOAD_SESSION_FILE: // Add this case
                    return {
                        ...state,
                        uploadResponse: null,
                        error: action.payload.error,
                    };
                default:
                    return { ...state };
            }
        default:
            return { ...state };
    }
};

export default Session;
